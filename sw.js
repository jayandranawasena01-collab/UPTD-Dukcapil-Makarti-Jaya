const CACHE_NAME = 'dukcapil-cache-v1';
const urlsToCache = [
  '/UPTD-Dukcapil-Makarti-Jaya/',
  '/UPTD-Dukcapil-Makarti-Jaya/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) { return response; }
        return fetch(event.request);
      })
  );
});
