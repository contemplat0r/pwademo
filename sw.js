var cacheName = 'tfjs-pwa';
/*var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/tf_models/model.json',
  '/tf_models/group1-shard1of1.bin'
];*/

/*var windowLocationHref = window.location.href;

var filesToCache = [
  windowLocationHref,
  windowLocationHref + 'index.html',
  windowLocationHref + 'css/style.css',
  windowLocationHref + 'js/main.js'
];*/

var currentUrl = 'https://contemplat0r.github.io/pwademo';

var filesToCache = [
  currentUrl,
  currentUrl + '/index.html',
  currentUrl + '/css/style.css',
  currentUrl + '/js/main.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});