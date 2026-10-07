// Service worker: keeps a copy of the app on the phone so it opens without signal.
// vite.config.ts fills in the cache name and file list below at build time.
const CACHE_NAME = "gym-guide-c51173505cdd";
const PRECACHE = ["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./assets/index-Cr_dYweg.js","./assets/index-US-vJGS6.css"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
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
    // Pages: use the network when it's there so updates show up, otherwise the saved copy.
    event.respondWith(fetch(request).catch(() => caches.match("./index.html", { ignoreSearch: true })));
    return;
  }
  // Built files have unique names per version, so the saved copy is always right.
  event.respondWith(caches.match(request).then((cached) => cached ?? fetch(request)));
});
