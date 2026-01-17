// sw.js - simple service worker for notifications & offline caching
const CACHE_NAME = 'sahayta-cache-v1';
const ASSETS = [
  '/', // adjust if hosting path differs
];

self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (ev) => {
  // We don't aggressively cache; fallback to network first
  ev.respondWith(fetch(ev.request).catch(()=> caches.match(ev.request)));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
