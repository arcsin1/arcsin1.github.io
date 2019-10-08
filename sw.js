"use strict"


const CACHE_NAME = 'service-cache-by-test';
const urlToCache =[
    '/',
    '/js/main.js',
    '/css/main.css',
    '/img/test.png',
    'https://yongling8808.github.io/sw/samples/service-worker/offline-page/images/banner.png',
    'https://images-na.ssl-images-amazon.com/images/G/01/authportal/common/js/ap-checkout-frn._CB309092179_.js'
]

// 安装事件
self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
        console.log('Opened cache')
        return cache.addAll(urlToCache)
    })
  )
})
// 
self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
    // 这里是更新
  });

  // 判断是否跨域了
const isCORSRequest = function(url, host) {
    return url.search(host) === -1;
};
const isValidResponse = function(response) {
	return response && response.status >= 200 && response.status < 400 && response.type !== 'basic'
};

const HOST_NAME = location.host;
console.log(location.host)

const handleFetchRequest = function(req) {
  const newRequest = isCORSRequest(req.url, HOST_NAME) ? new Request(req.url, {mode: 'cors'}) :req;
  return caches.match(newRequest).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      const fetchRequest = newRequest.clone();
      return fetch(fetchRequest)
        .then(function(response) {
          // Check if we received an valid response
          if (isValidResponse(response)) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
                cache.put(newRequest, responseToCache);
              });
          }

          return response;
        });
    });

};

const onFetch = function(event) {
	event.respondWith(handleFetchRequest(event.request));
};
// 更新事件
self.addEventListener('fetch', onFetch);
