// PRE-CACHE RISORSE

// definisco il nome della cache
// per poterla richiamare in seguito
const cacheName = '_hello-pwa_';

const resourcesToCache = [
  '/',
  'style.css',
  'images/chocolate.png',
  'images/mountain.png',
  'images/snes.png'
];

// all'evento di installazione dell'app
// metti in cache le risorse statiche
self.addEventListener('install', function(e) {
  console.log('Service worker installato! 🚀');
  
  e.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(resourcesToCache);
      })
  )
});

// ogni volta che il browser
// fa una chiamata per recuperare una risorsa, 
// accedi alla versione conservata nella cache
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request)
    .then(function(cachedResponse) {
      return cachedResponse || fetch(e.request);
    })
  );
  
})