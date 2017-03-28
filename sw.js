self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('umar-portfolio').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/umar.min.css',
        '/font-awesome-4.5.0/css/font-awesome.min.css',
        '/font-awesome-4.5.0/fonts/fontawesome-webfont.ttf',
        '/font-awesome-4.5.0/fonts/fontawesome-webfont.ttf?v=4.5.0',
        '/font-awesome-4.5.0/fonts/fontawesome-webfont.woff',
        '/font-awesome-4.5.0/fonts/fontawesome-webfont.woff?v=4.5.0',
        '/font-awesome-4.5.0/fonts/fontawesome-webfont.woff2',
        '/font-awesome-4.5.0/fonts/fontawesome-webfont.woff2?v=4.5.0',
        '/manifest.json',
        '/sw.js',
        '/js/jquery.min.js',
        '/js/bootstrap.min.js',
        '/js/material.min.js',
        '/js/ripples.min.js',
        '/js/contact_me.js',
        '/js/jqBootstrapValidation.js',
        '/js/main.js',
        '/images/shortcut.png',
        '/images/umaryusuf.jpg',
        '/images/shortcuts/umar72x72.png',
        '/images/shortcuts/umar128x128.png',
        '/images/shortcuts/umar152x152.png',
        '/images/shortcuts/umar144x144.png',
        '/images/shortcuts/umar192x192.png',
        '/images/shortcuts/umar256x256.png',
        '/images/shortcuts/umar512x512.png',
        '/images/kasugdg.png',
        '/images/swapmybook.png',
        '/images/ktcproject.png',
        '/images/wasteproject.png',
        '/images/portfolio.png',
        '/images/houserenting.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});


// self.addEventListener('install', e => {
//   e.waitUntil(
//     caches.open('portfolio').then(cache => {
//       return cache.addAll([
//         '/',
//         '/index.html',
//         '/css/bootstrap.min.css',
//         '/css/bootstrap-material-design.css',
//         '/css/ripples.min.css',
//         '/css/main.css',
//         '/font-awesome-4.5.0/css/font-awesome.min.css',
//         '/font-awesome-4.5.0/fonts/fontawesome-webfont.ttf',
//         '/font-awesome-4.5.0/fonts/fontawesome-webfont.ttf?v=4.5.0',
//         '/font-awesome-4.5.0/fonts/fontawesome-webfont.woff',
//         '/font-awesome-4.5.0/fonts/fontawesome-webfont.woff?v=4.5.0',
//         '/font-awesome-4.5.0/fonts/fontawesome-webfont.woff2',
//         '/font-awesome-4.5.0/fonts/fontawesome-webfont.woff2?v=4.5.0',
//         '/manifest.json',
//         '/js/jquery.min.js',
//         '/js/bootstrap.min.js',
//         '/js/material.min.js',
//         '/js/ripples.min.js',
//         '/js/main.js',
//         '/images/shortcut.png',
//         '/images/umaryusuf.jpg',
//         '/images/shortcuts/umar192x192.png',
//         '/images/kasugdg.png',
//         '/images/swapmybook.png',
//         '/images/ktcproject.png',
//         '/images/wasteproject.png',
//         '/images/portfolio.png',
//         '/images/houserenting.png'
//       ])
//       .then(() => self.skipWaiting());
//     })
//   )
// });

// self.addEventListener('activate',  event => {
//   event.waitUntil(self.clients.claim());
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });