const cacheName = 'v1';
const cacheAssets = [
  '/',
  '/index.html',
  '/style.css',
  '/style2.css',
  '/site.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Install event
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cacheAssets))
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== cacheName)
        .map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Fetch event
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.error('Service Worker failed', err));
    });
  }
  

  /*/
    prototype of the PWA dont know if it works so far i think i will need a domain for the website for the code to execute 
  /*/