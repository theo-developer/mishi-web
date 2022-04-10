'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5d3868f04219aeffcb7244bc81ee85e5",
".git/config": "4089611c6bfcff9144413a1c54676006",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7e632c4dd1c880f57f2db9b5aba7e56c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7af7051c323a2fa17c972a71be043edd",
".git/logs/refs/heads/master": "7af7051c323a2fa17c972a71be043edd",
".git/logs/refs/remotes/origin/master": "4c153c170b48b7e29952ad98d83099ba",
".git/objects/03/2aa66a61f386ae605b08a9ad7700de31e47efe": "39a420bc6457d0c1fb55b71bb69d0531",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/0ba4e7aebff4680ebade46851e2a695f0d8b18": "732253661fb80a0332f750c9571e5225",
".git/objects/0e/bf25ea22daf3a439eca8aa5ffbcfe645dd756c": "7b44ce2c70cffbd36326ba83e00734f9",
".git/objects/12/6ecaf2bcce014c13180ce4a478e79131945f8c": "99abd318e3156d0f2e641f82f714cb4c",
".git/objects/16/87c258f8dde2cfaeaf0e20f83408665c4f2e26": "d7eba88d355e7f23a87f1a5524b1e11a",
".git/objects/17/2de384b57710ab936c1b45f0268fce3310fc46": "7509304710a79eab6b678dcb04d5c99d",
".git/objects/21/0594921c1ba39d8a7eb0b4570dd373770aeae9": "3b45bd1dbdeb7d59c76bf50177c91ae2",
".git/objects/22/bc9c2904e284d5e0a5ee2892792a371e06637e": "d00a4053df64418b343245234330e828",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/11e465b841713fe21bb33a2dcc7a553856b4e2": "0f9144179466b917c0f9e3036f41e3b4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/687e7ae0389bbbc81067f62f3be371061f113c": "63d8456ae2be7d24bf4b0b26ce4929af",
".git/objects/33/b497bf4bb0f3312f6e17f677581e5f94c24aee": "85e078d9e64229b6e58d7e220f660722",
".git/objects/36/f98be1f155278bbf83753bbbd540dd98f110f0": "3f7d48631681501c5a781b64b25ee3d2",
".git/objects/3a/93b4eb77fb4b6a1c7cb68c91960b24160f59e3": "f6e021600cbc283e150133a68c521dc5",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/cc6332609f0ee9a166776e4b0e6c50ac925e4c": "51663c069b8414ce149a596ba2635c6a",
".git/objects/46/2092199a5d18f9224aeca9816fb1d55f45b17d": "c98d02746742be2542e6dadc8d9bce7b",
".git/objects/47/38d0bdb295133183c9de4f7544b9f8fec50d33": "8dc815b78cff74addc9d76eae625e73a",
".git/objects/4d/ef476eba96a70b78e6f5e41539bb58346883d8": "c63b2d824be78d33ecf464228673a485",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/66/bd92119c79f16fd8979f5ab2aed77db9198aec": "3f7eedd150c8f50e4a43ed17573bb332",
".git/objects/6d/696418777afc2514bed43242f7f1fe2f4cb385": "f6644de70bd27165e7690951b861b7eb",
".git/objects/6f/1fabaa79bdbf14ede3bc4fce5a57abebbb5ca3": "115c017edc5bdeb7a084c8d0cadc7d9e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/4ef821b0186b6b1fe3d9ac2455cdabff512765": "f59dd55e47be37f4542a2880c972c9a9",
".git/objects/7e/737af2c304d8b26066acb08eb736df402d5e77": "b9ecc1422d7ca37e06016efdff281f4e",
".git/objects/83/2c8962947b5a17a1a9dec2631c8a3343d3ce14": "a0c7a3926e40ea515275c64fe60e1fc8",
".git/objects/8c/21fd45220e8773b191780d35ab776f1584ab98": "41fca98379eb884f03125706e40eb7be",
".git/objects/92/51b36750c89c40a49500c818ecbe8cdf08a7f5": "6de91638f33f19062aea514b0babb95a",
".git/objects/95/170663b681dedef3ee9b1b3ea6106ee2b3c3a8": "ddbff6dcbd26309cc5f13d0fa643ff32",
".git/objects/97/415c5e317599a86f5690896ff0d4d0fe46accc": "eb5ee0e74156b72b299a580be2ee6456",
".git/objects/9d/3b738e3712887c26ac05c7b1cbf608965917e8": "b814f7ca6f366e44a84f71cbadfde06d",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/a5/c55d2bf688021bcab8d63b3c0f2d660a1e1f77": "b0d15dc89ebc67c37f32d75fa9e732f8",
".git/objects/a8/4d1cac20ffb189d5d79f2222a4ca59e3e44f22": "b3a2499da6d58f9e38e0449dd2c2c30f",
".git/objects/b2/44c732b245b8334efff3daaf7f69413587e709": "19898e0cf27c4f8a61900068bc4e1154",
".git/objects/ba/b1aae8855a09c15006db862bee04356b6c05c2": "10acae33f9aacee58ed47c1470609886",
".git/objects/bc/14cf1551db5f33350f0335f4ca4ae839765bea": "0cbd5f98d715c2c02fa156cc92daa922",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cf/2737322545951e9429d9458a09edf99b53fb95": "2d2c9f65b49c8c16a234b36549f16d23",
".git/objects/da/1d31fca12ab8624069f4ab35cc7ee96e13251d": "bfd9f7d63d3e1ec42e2fa08fcb63daa0",
".git/objects/e0/552007531e28ce0f0ae9123bf280734312bb31": "be780218b21596c56d7873dbffb6d28c",
".git/objects/e1/94f9e347f9331e630b5c4281ad490b3486aee9": "32349c0724265545c66c95e3fcc59d29",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/fe/99137b5b2e3d035964af392d98e743e365744e": "b2bdbfa71d4f660b617c19a86c8587c0",
".git/refs/heads/master": "6efbde1db29596a243f30b0bdedbc321",
".git/refs/remotes/origin/master": "6efbde1db29596a243f30b0bdedbc321",
"assets/AssetManifest.json": "9bb961ee6f7870be3b4f0cc0d1df4744",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/coffee_paperclips_pencil_angled_bw_w1080.jpg": "9f499cf53bb008afe9f6bd89deba9c52",
"assets/assets/images/iphone_cactus_tea_overhead_bw_w1080.jpg": "319249e756f3a470d45841baea9d1132",
"assets/assets/images/joy_note_coffee_eyeglasses_overhead_bw_w1080.jpg": "f014b7b75e442ae187976761117acc17",
"assets/assets/images/mugs_side_bw_w1080.jpg": "7ac1959d3b134bbcef006780161606f7",
"assets/assets/images/paper_flower_overhead_bw_w1080.jpg": "1bed4aefd73a600a585112a77c250a6c",
"assets/assets/images/typewriter_overhead_bw_w1080.jpg": "39e8f60e5bb2b90a5d801dd4617e7927",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "180a838c4fb1075fc99d4732f784578d",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "6fa00cd77fd33a0d385ef49ad103d8c2",
"icons/Icon-192.png": "b7d8d10eef2cf87b9b53539f8879c66a",
"icons/Icon-512.png": "abc9d01a0bb18d86195c6053d652f149",
"icons/Icon-maskable-192.png": "aa661a27b49c771216deb8c71f091bc6",
"icons/Icon-maskable-512.png": "a879641542d57ad0d7457ec53b492aa5",
"index.html": "cee8b45f1874a47669e2e2092780c851",
"/": "cee8b45f1874a47669e2e2092780c851",
"main.dart.js": "f8df29a3cd4cc3c7a8c2fe0de4a6ed22",
"manifest.json": "6128c64a42298c3c9799c3f045ff7696",
"Minimal-Favicon.png": "0b142f8f8dcc0a90131fab06535a200b",
"version.json": "b58265fa343ac8efd35506740673ce72"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
