// Retires the service worker from the previous shayra.com site.
// Returning visitors have the old worker registered; without this they would be
// served the old cached pages indefinitely. This unregisters it, clears every
// cache it created, and reloads open tabs onto the current site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((client) => client.navigate(client.url));
  })());
});
