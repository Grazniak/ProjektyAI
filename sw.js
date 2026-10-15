// Ten plik tylko sprząta: wcześniej przez pomyłkę na stronie głównej działał service worker gry.
// Wyrejestrowuje się i czyści stare pamięci podręczne, żeby strona główna zawsze była aktualna.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  for(const k of await caches.keys())await caches.delete(k);
  await self.registration.unregister();
  const cs=await self.clients.matchAll({type:'window'});cs.forEach(c=>{try{c.navigate(c.url);}catch(_){}});
})());});
