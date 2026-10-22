// Service worker: keeps a copy of the app on the phone so it opens without signal.
// vite.config.ts fills in the cache name and file list below at build time.
const CACHE_NAME = "gym-guide-e1bdc18aaba1";
const PRECACHE = ["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./assets/index-3tjRsXYd.js","./assets/index-CavEPfWh.css"];
// Songs the user chose to save for offline use. They live in their own cache so an app update keeps them.
// Keep this name in step with src/offlineMusic.ts.
const MUSIC_CACHE = "gym-guide-music";

self.addEventListener("install", (event) => {
  // "reload" skips the browser's own cache, which on GitHub Pages can hold a page for up to 10 minutes.
  // Without it, a stale index.html could be saved next to files from the new version.
  const requests = PRECACHE.map((url) => new Request(url, { cache: "reload" }));
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(requests))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME && name !== MUSIC_CACHE).map((name) => caches.delete(name))))
      .then(() => self.clients.claim()),
  );
});

/** Audio elements ask for a song in pieces ("Range" requests), so a saved song has to be answered in pieces too. */
function pieceOf(saved, rangeHeader) {
  const wanted = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
  if (!wanted || (wanted[1] === "" && wanted[2] === "")) return saved;
  return saved.blob().then((blob) => {
    const size = blob.size;
    const first = wanted[1] === "" ? Math.max(0, size - Number(wanted[2])) : Number(wanted[1]);
    const last = wanted[1] === "" || wanted[2] === "" ? size - 1 : Math.min(Number(wanted[2]), size - 1);
    if (first >= size || first > last) {
      return new Response(null, { status: 416, headers: { "Content-Range": "bytes */" + size } });
    }
    return new Response(blob.slice(first, last + 1), {
      status: 206,
      headers: {
        "Content-Type": saved.headers.get("Content-Type") || "audio/mpeg",
        "Content-Range": "bytes " + first + "-" + last + "/" + size,
        "Content-Length": String(last - first + 1),
      },
    });
  });
}

/** A saved song if there is one, otherwise the internet. */
function songResponse(request) {
  return caches
    .open(MUSIC_CACHE)
    .then((cache) => cache.match(request.url))
    .then((saved) => {
      if (!saved) return fetch(request);
      const range = request.headers.get("range");
      return range ? pieceOf(saved, range) : saved;
    });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    // Pages: ask the network, checking that the browser's cached page is still current, so a new
    // version shows up right away. With no signal, fall back to the saved copy.
    event.respondWith(
      fetch(request.url, { cache: "no-cache" }).catch(() => caches.match("./index.html", { ignoreSearch: true })),
    );
    return;
  }
  if (new URL(request.url).pathname.endsWith(".mp3")) {
    event.respondWith(songResponse(request));
    return;
  }
  // Built files have unique names per version, so the saved copy is always right.
  event.respondWith(caches.match(request).then((cached) => cached ?? fetch(request)));
});
