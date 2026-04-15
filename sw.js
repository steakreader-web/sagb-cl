// Service Worker SAGB — Contrôle Laitier
// Mise en cache complète pour fonctionnement hors-ligne

const CACHE_NAME = 'sagb-cl-v1';

// Tous les fichiers à mettre en cache au premier chargement
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './xlsx.full.min.js',
  './chart.min.js',
  './jspdf.min.js',
  './jspdf.autotable.min.js',
  './icon-192.png',
  './icon-512.png'
];

// Installation : mettre en cache tous les fichiers
self.addEventListener('install', event => {
  console.log('[SW] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Mise en cache des fichiers');
        // Cache un par un pour éviter l'échec total si un fichier manque
        return Promise.allSettled(
          FILES_TO_CACHE.map(url =>
            cache.add(url).catch(err => console.warn('[SW] Impossible de cacher:', url, err))
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activation : supprimer les anciens caches
self.addEventListener('activate', event => {
  console.log('[SW] Activation...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Suppression ancien cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch : servir depuis le cache en priorité (offline-first)
self.addEventListener('fetch', event => {
  // Ne gérer que les requêtes GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Retourner depuis le cache immédiatement
          return cachedResponse;
        }
        // Pas dans le cache : essayer le réseau
        return fetch(event.request)
          .then(networkResponse => {
            // Si réponse valide, la mettre en cache pour la prochaine fois
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Réseau indisponible et pas en cache
            // Pour les pages HTML, retourner index.html
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
  );
});

// Message pour forcer la mise à jour du cache
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
