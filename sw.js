// Service worker: keeps a copy of the app on the phone so it opens without signal.
// vite.config.ts fills in the cache name and file list below at build time.
const CACHE_NAME = "gym-guide-53d2dacc5583";
const PRECACHE = ["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./assets/index-5NCage98.js","./assets/index-DwcW_KVQ.css"];

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
      .then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))))
      .then(() => self.clients.claim()),
  );
});

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
  // Built files have unique names per version, so the saved copy is always right.
  event.respondWith(caches.match(request).then((cached) => cached ?? fetch(request)));
});
