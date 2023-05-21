'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9d74abb609d34013ea6c4af24eecafeb",
"index.html": "b89e963da2800f8572dd83cd551d1eac",
"/": "b89e963da2800f8572dd83cd551d1eac",
"main.dart.js": "c5c428282a67ca2d78d29a0a12012b4c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "2cf1f7ad832f64d81992bfece7e1498c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5863abff4d897471ec81d6c330551940",
".git/config": "adcbb13ae636368d13d0f9564bfe8501",
".git/objects/57/680e3e892eca401d292478c0685f4beb572665": "64ff87800fe1240e731f87aaf21aaf67",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/04/e7f1473ab7ebbbd772854f0021dcd0342f2c4c": "dd8242e4af3ef4ea3ff3090e1d3e88b0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/54925313f8c3bc96be89b56dc58725f9af6e44": "9f0d6b0259c7f272c40c75185ce306d0",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/0158ed9d943f9af00a823de496bdcd18111b3b": "911099291a1fefdcd5a3200c26d058de",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/5a/96917d3d636f921c3778e55685dec052c1eff2": "42c95f930019239cd2d6428d94610439",
".git/objects/9d/13e43cbca8b8c2b7f68219ed9b875b4dc9a2cb": "776fc2ed5bb533c30ce1e02171f00cff",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/cc24d348485cb34815396c318e3d3cf3ecacea": "247919fff11d5989a6bebdcd1f2c04ec",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f4/2f3be937b01c4207aa69466415fd60ec912c43": "815041491b6ec05b9aca4d6734cfe32e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/3e827ab14e6e433f27718c5a60fff3eb4bfb28": "051f8581c28201379f55f59a524b1151",
".git/objects/c0/4b1cdf421b00ff89eab6a7b6a19583bb1c3e4e": "486f5d2e9ec827199ceff02d53c25c7e",
".git/objects/f2/7b553c5ae1f62292b819201fe9b23e552d0cc8": "07a8f088a928871ce5a1937012d97831",
".git/objects/c6/e0476f6c846008c5fedc96941dd273198ec852": "352474d3f500b95f064bdf40c9cbd78f",
".git/objects/4e/f93e5351c61264b46435a24625316f029837d6": "571b83cb5ae73c0becf6844a3e3d2f41",
".git/objects/74/13982b4853cb5c7575e6bacb500a3e45da2ddc": "2a5e243ccf2f8d91d9ccb540932f57e0",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/5364c4366e71b09aa4b92dac44e226d8b5a83e": "180b0a231cb039d9be8e1f4ec93891d1",
".git/objects/21/a85057b4f31d425d54867401aa6f1f9899b31e": "b697a0a8f84d6bfafc78825b41aa0f3c",
".git/objects/44/6ed19912a815c9f099ac48d13a542ac892132b": "d3a951da71c2dc30cbcdebb4e80125dd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/36/401b763d28c33f6d82fcc7ff70ae5f0f196d81": "1a66668d91303db2667b6fe95a8a1a34",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/29029b5414debd7b1ee8890c8aecf25dafdbe5": "453ce5a224762f5ee2f80952a6a57cf7",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/8b0ff12651c6024851da79825148ef89585be1": "7975367be4e55e2e7531d906680af4d4",
".git/objects/a0/08efd8ff82c77a37bc4ef54633500bc493ffa0": "f9de74ee32e26a46b52e05f86008bbe1",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/f06174fbb238b2e77ecf0a4a0e0694405516ea": "aa1559943f2c33621236ed813b0b803c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/96f06b017fd545c096d513d8d60677511ee8fe": "56f60036aecdeef44e0502d79f2d1dd0",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/f7/12d3c0665f5e6e34c0ddf8529f4749cf5c41b5": "18eb040b8db8e89e715b08054684d638",
".git/objects/fa/509cc30520a60f4a634d251061d74c561f79a8": "a05a50c29d33f36ab09835b286f57663",
".git/objects/c2/c06c47246f8616e0832baf90a4b5609a949954": "84da86c38671a2998dbe8a9742ad571d",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/2d/90b23d6f8f328eb534a401c87300705391856b": "d99a790fea2684f787bac80eeddf78d9",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/41/45290a7728f256d9171fae183b084136d0ff44": "96b4f30751f9f3f8ba77c1ffc085c7ba",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/1d/b7e2d0d28ddac26a4df40691d50d449decf321": "d8d1ef3fe29c9a2829c5a97d8f4215a5",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/0a9bcf9ba7cb28555cabafa8a2ecc2fa52b4e4": "e8bb1ab5822eea4bcce3264b0bfe6481",
".git/objects/82/2086d2df052e309d88de3fdeb9d704d5dd13d2": "61f854b26e87c7dbc8b52ebd37e6abfc",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/96e653cfc332efab2a683ec137e847ffe99ac7": "7f2590dfd994c9ade8beae69fdf1b360",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e5b8f6ad4477477699e76261ae9416f",
".git/logs/refs/heads/main": "3e5b8f6ad4477477699e76261ae9416f",
".git/logs/refs/remotes/origin/main": "9eedb0684988b89f638695008d27158c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "43c2f7ddf70b65b37849f3bc3a69e815",
".git/refs/remotes/origin/main": "43c2f7ddf70b65b37849f3bc3a69e815",
".git/index": "609f35fcfce72cb48244b4e6e284147a",
".git/COMMIT_EDITMSG": "3005d1dbed7f31e187ec4dc0e1daff80",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/default_empty_view_image_mobile.png": "e0333daa0bf04df60e7eb3ac947b1bce",
"assets/images/appbar_background.png": "a4cf970d3a177f147b678d69bcde5e6d",
"assets/images/apes_logo.png": "8289123f62dcd033faadfd1e29d1704b",
"assets/images/profile_icon.png": "3f1b482f0b30553cf3934ea8a6fba79f",
"assets/images/consumption_icon.png": "6fa0a9b5262d7b9f825d0e5b724c58e6",
"assets/images/office_icon.png": "97bcca4dcba5c06d9be561d08c1ed741",
"assets/images/home_icon.png": "b3aca66a54ef0cbf1b4a2c95db59714f",
"assets/images/water_tap.png": "08bc0ac108b7bcbfe625f6154e0534a3",
"assets/images/home_mobile_background.png": "bd03b286fc2824237ee9e0cba0e023c6",
"assets/images/reach_us_icon.png": "a6608746c63606fe408756546cc1a70a",
"assets/images/money.png": "547e151342130456eb1bbfdf3e5cf115",
"assets/images/offers_icon.png": "ace6250b99b005177e4e006c604510f2",
"assets/images/learn_icon.png": "2736ae774bf580b621eb12b322ac04c8",
"assets/images/solutions_icon.png": "0c1940ac69132d5d539c53597ab265a7",
"assets/images/wms_logo.png": "2cf1f7ad832f64d81992bfece7e1498c",
"assets/images/home_desktop_background.png": "4a2cd73c32307f920f962d8ae870cd56",
"assets/AssetManifest.json": "6f83abb65ec2ecc3bb94700a2bb1aea9",
"assets/NOTICES": "507251c939d1c6d62f5a5cc0b51b968f",
"assets/languages/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/languages/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "53c04b6c7d072d1cab489f8564865c03",
"assets/fonts/MaterialIcons-Regular.otf": "b131a22fd5d25cc771e1a6b074605699",
"assets/assets/images/default_empty_view_image_mobile.png": "e0333daa0bf04df60e7eb3ac947b1bce",
"assets/assets/images/appbar_background.png": "a4cf970d3a177f147b678d69bcde5e6d",
"assets/assets/images/apes_logo.png": "8289123f62dcd033faadfd1e29d1704b",
"assets/assets/images/profile_icon.png": "3f1b482f0b30553cf3934ea8a6fba79f",
"assets/assets/images/consumption_icon.png": "6fa0a9b5262d7b9f825d0e5b724c58e6",
"assets/assets/images/office_icon.png": "97bcca4dcba5c06d9be561d08c1ed741",
"assets/assets/images/home_icon.png": "b3aca66a54ef0cbf1b4a2c95db59714f",
"assets/assets/images/water_tap.png": "08bc0ac108b7bcbfe625f6154e0534a3",
"assets/assets/images/home_mobile_background.png": "bd03b286fc2824237ee9e0cba0e023c6",
"assets/assets/images/reach_us_icon.png": "a6608746c63606fe408756546cc1a70a",
"assets/assets/images/money.png": "547e151342130456eb1bbfdf3e5cf115",
"assets/assets/images/offers_icon.png": "ace6250b99b005177e4e006c604510f2",
"assets/assets/images/learn_icon.png": "2736ae774bf580b621eb12b322ac04c8",
"assets/assets/images/solutions_icon.png": "0c1940ac69132d5d539c53597ab265a7",
"assets/assets/images/wms_logo.png": "2cf1f7ad832f64d81992bfece7e1498c",
"assets/assets/images/home_desktop_background.png": "4a2cd73c32307f920f962d8ae870cd56",
"assets/assets/languages/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/languages/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
