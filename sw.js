// সঞ্চয় সমিতি: অ্যাপ হিসেবে যোগ করার জন্য ছোট সার্ভিস ওয়ার্কার (কিছু ক্যাশ করে না, তাই পুরনো পাতা আটকে থাকে না)
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",()=>{});
