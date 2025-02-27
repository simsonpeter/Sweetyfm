const CACHE_NAME = 'sweety-fm-v1';
const ASSETS = [
  '/',
  '/index.html',
  'https://i.ibb.co/cSnS4wgG/cropped-Sweety-FM.png',
  'https://i.ibb.co/PZH0Z05Y/microphone-acoustic-isolation-foam.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Serve cached assets when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
