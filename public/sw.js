const CACHE_NAME = 'Learn Code';
const toCache = [
  '/',
  '/arc-sw.js',
  '/brace-fold.js',
  '/closetag.js',
  '/codemirror.css',
  '/codemirror.js',
  '/comment-fold.js',
  '/comment.js',
  '/continuecomment.js',
  '/css-hint.js',
  '/css-lint.js',
  '/css.js',
  '/css-lint.js',
  '/foldcode.js',
  '/foldgutter.css',
  '/foldgutter.js',
  '/formatting.js',
  '/formatting2.js',
  '/home.css',
  '/hostingcoins.js',
  '/html-hint.js',
  '/html-lint.js',
  '/indent-fold.js',
  '/instantclick.min.js',
  '/jQuery.min.js',
  '/javascript-hint.js',
  '/javascript-lint.js',
  '/javascript.js',
  '/jshint.js',
  '/jsonlink.js',
  '/lint.css',
  '/lint.js',
  '/login.css',
  '/markdown-fold.js',
  '/matchbrackets.js',
  '/show-hint.css',
  '/show-hint.js',
  '/sitemap.txt',
  '/sw.js',
  '/index.html',
  '/editor.html',
  '/edit.html',
  '/404.html',
  '/style.css',
  '/hoster404.html',
  '/home.html',
  '/secret.html',
  '/editor',
  '/edit',
  '/404',
  '/style.css',
  '/hoster404',
  '/home',
  '/secret',
  '/offlineedit',
  '/offlineedit.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(toCache)
      })
      .then(self.skipWaiting())
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key)
            return caches.delete(key)
          }
        }))
      })
      .then(() => self.clients.claim())
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.open(CACHE_NAME)
          .then((cache) => {
            return cache.match(event.request)
          })
      })
  )
});