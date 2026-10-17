// Service worker: receives a PDF shared from the Android share sheet and hands it to the page.
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  const url=new URL(e.request.url);
  if(e.request.method==="POST"&&url.pathname.endsWith("/share")){
    e.respondWith((async()=>{
      const fd=await e.request.formData(); const file=fd.get("itinerary");
      if(file){ const cache=await caches.open("shared"); await cache.put("shared-pdf",new Response(file,{headers:{"Content-Type":"application/pdf","X-Name":file.name||"itinerary.pdf"}})); }
      return Response.redirect("./?shared=1",303);
    })());
  }
});
