const cacheName = 'v1';// cache version name
const cacheAssets = [// files to cache
  '/',
  '/index.html',// html file
  '/style.css',// first css file
  '/style2.css', // second css file
  '/js/allianceButtonLogic.js',// alliance button logic file
  '/js/buttonMap.js',// button map file
  '/js/coralButtonsLogic.js',// coral buttons logic file
  '/js/data.js',// data file
  '/manifest.json',// manifest.json file
  '/icon-192.png',// icon file
  '/icon-512.png'//icon file
];

// Install event
self.addEventListener('install', e => { // install service worker
  e.waitUntil(// wait until the promise is resolved
    caches.open(cacheName) // open the cache
      .then(cache => cache.addAll(cacheAssets))// add all files to cache
      .then(() => self.skipWaiting())// activate the service workwer immediately
  );
});

// Activate event
self.addEventListener('activate', e => {// activate service worker
  e.waitUntil(// wait until the promise is resolved
    caches.keys().then(keys => // gather all cache keys
      Promise.all(// wait until all promises are resolved
        keys.filter(key => key !== cacheName)// filter out the current cache
          .map(key => caches.delete(key))// delete the old cache
      )
    ).then(() => self.clients.claim())// take control of all clients immediately
  );
});

// Fetch event
self.addEventListener('fetch', e => {// fetch event
  e.respondWith(// respond with the cached file or fetch from network
    fetch(e.request).catch(() => caches.match(e.request))// fetch from network, if fails, get from cache
  );
});
