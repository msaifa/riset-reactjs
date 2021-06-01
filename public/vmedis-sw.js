console.log('hallo from service worker')

let cacheData = 'VmedisOffline' 

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache)=>{
      cache.addAll([
        '/static/js/bundle.js',
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/vendors~main.chunk.js',
        '/favicon.ico',
        '/index.html',
        '/manifest.json',
        '/vmedis-sw.js',
        '/',
        '/penjualan-obat',
        '/penjualan-obat/pencarian',
        '/penjualan-obat/bayar',
      ])
    })
  )
})

this.addEventListener("fetch", (event) => {
  event.respondWith(

    caches.open(cacheData).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          
          // check apakah dia adalah chrome extension
          // jika iya maka di skip
          let uri = event.request.url
          if (uri.substring(0,19) == "chrome-extension://"){
            return {}
          }

          cache.put(event.request, response.clone());
          return response;
        });
      });
    })

    // caches.match(event.request).then((result)=>{
    //   if (result){
    //     console.log('lagi offline - menggunakan script sebelumnya')
    //     return result
    //   } else {
    //     fetch(event.request)
    //   }
    // })
  )
})