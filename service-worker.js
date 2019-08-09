/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7a99f249a19f8fbc57e6707431dc0596"
  },
  {
    "url": "anna.html",
    "revision": "028bf6291d3867ed9792e723d96e92d5"
  },
  {
    "url": "assets/css/19.styles.401f7b0a.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/20.styles.05e3f966.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.902774d0.css",
    "revision": "aee98584e5c7ce28a97767fc74b964df"
  },
  {
    "url": "assets/img/1.0edda4fa.jpg",
    "revision": "0edda4fa77717322ef650a5d689bf26d"
  },
  {
    "url": "assets/img/2.0500063e.jpg",
    "revision": "0500063e0c50af34d23f02bafb775500"
  },
  {
    "url": "assets/img/3.48b6d738.png",
    "revision": "48b6d73891d60580ece9e4f9170d57de"
  },
  {
    "url": "assets/img/4.ee42e5fa.jpg",
    "revision": "ee42e5fa7490af816407d9a1402ba097"
  },
  {
    "url": "assets/img/hint.32782980.jpg",
    "revision": "3278298048c93fa429ee50bc6e174ec1"
  },
  {
    "url": "assets/img/hint2.016ed6c9.jpg",
    "revision": "016ed6c9e652eb10275ab9eb044bc063"
  },
  {
    "url": "assets/img/image15.36cd4e95.png",
    "revision": "36cd4e955c42ede068540792fb7dc863"
  },
  {
    "url": "assets/img/image16.773f826e.png",
    "revision": "773f826e727d68f73c6e50e4a6e70ab5"
  },
  {
    "url": "assets/img/image6.72a2a914.png",
    "revision": "72a2a91463c67984e63a809870d1dbff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.a5f37bfd.js",
    "revision": "79980167b90b6fe7969e6963ff2d3acd"
  },
  {
    "url": "assets/js/1.960b319e.js",
    "revision": "40936d541641a7839c9a82e1bcd750e8"
  },
  {
    "url": "assets/js/10.85892602.js",
    "revision": "c8b1861a152ca3a3044a4d6c6cd002ae"
  },
  {
    "url": "assets/js/11.c43b2ed3.js",
    "revision": "b69700076f54135ffe5c1d8b35559ae1"
  },
  {
    "url": "assets/js/12.38d7253a.js",
    "revision": "941369d57a981c5c5f9c1e320b44dc93"
  },
  {
    "url": "assets/js/13.4c1982c3.js",
    "revision": "cbf0d1a927356d15c7afb27b31f8b2f4"
  },
  {
    "url": "assets/js/14.be7426e5.js",
    "revision": "fd478b6fe07b11fc4ce3e53ac44db218"
  },
  {
    "url": "assets/js/15.92213421.js",
    "revision": "49408b94b5c4a5e996a25a2292a6a93e"
  },
  {
    "url": "assets/js/16.096f9bfd.js",
    "revision": "8583cba3b206021bde5f9c8285c93acb"
  },
  {
    "url": "assets/js/17.80e00457.js",
    "revision": "e9e1f6bedbd9297e1362369aac67e409"
  },
  {
    "url": "assets/js/18.976de1dd.js",
    "revision": "f623617aa1c49749629c1eaa7ffeace1"
  },
  {
    "url": "assets/js/19.401f7b0a.js",
    "revision": "b9d70389ed96c8458e033ac5cb6ce284"
  },
  {
    "url": "assets/js/2.16bf1048.js",
    "revision": "be50ad681bea16902a3718ad1d821a19"
  },
  {
    "url": "assets/js/20.05e3f966.js",
    "revision": "4873179e1c5d26ab3cf9c7aaff8292fb"
  },
  {
    "url": "assets/js/3.8211efe1.js",
    "revision": "e2d094fc41afabf29bac0511bf7d1b71"
  },
  {
    "url": "assets/js/4.06206466.js",
    "revision": "2eaee82078c43d7e06a38d63ef118ab5"
  },
  {
    "url": "assets/js/5.de96eb09.js",
    "revision": "8b745267077d560133dccb4ee56ab84d"
  },
  {
    "url": "assets/js/6.a2af3226.js",
    "revision": "99c06c632f4fde02b917bce8d2a8490a"
  },
  {
    "url": "assets/js/7.3e3985c9.js",
    "revision": "a0b8f730415446df5bb9d7b133182b6e"
  },
  {
    "url": "assets/js/8.f1e23c01.js",
    "revision": "78bd1b3bc13d473fa4254c4e69620fe6"
  },
  {
    "url": "assets/js/9.11d86a0d.js",
    "revision": "57e032c8909733daf6d4f4b16702fdf1"
  },
  {
    "url": "assets/js/app.902774d0.js",
    "revision": "d5afaf1d20e0afae8468d112009b6400"
  },
  {
    "url": "audio.html",
    "revision": "dc84da3a3860e6e242ba7b3387a68a6e"
  },
  {
    "url": "bio.html",
    "revision": "8883acdfa585b7a7322444ca84430023"
  },
  {
    "url": "git.html",
    "revision": "bdedafff83abf205f0bf302877d5c649"
  },
  {
    "url": "googleform.html",
    "revision": "a365f80a3e6de4be4b3d423f730c661f"
  },
  {
    "url": "hackinthenorth3.html",
    "revision": "b7cb9a3762c60f13da88a35b8c2d2508"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "hint.html",
    "revision": "ff4858925f39d684f827b4d67769ba2e"
  },
  {
    "url": "hint2.html",
    "revision": "8fecb1eec4b402d6c490f4722f3b826a"
  },
  {
    "url": "icon.png",
    "revision": "85be8e2f217d53c214b59553b9fd0e3f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "iiitahacks.html",
    "revision": "9e90eb3b3061c7d129b19e024934a6e0"
  },
  {
    "url": "index.html",
    "revision": "484922703e843ff51820b5e95e398ce7"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "manjaroDeepin.html",
    "revision": "371936b411650b4ec211d0097448a3dc"
  },
  {
    "url": "mljobs.html",
    "revision": "b667190d7c8e1ada20ca71158d9db69c"
  },
  {
    "url": "NotFound.html",
    "revision": "bcf5f65d26ed333837541d920e4d6343"
  },
  {
    "url": "nybles.html",
    "revision": "5bf5c16453ae6d569ebd8c2798e3dab0"
  },
  {
    "url": "opencode.html",
    "revision": "f067e27ea807223a17bde905ecf4c455"
  },
  {
    "url": "pelican.html",
    "revision": "18079f7c1521051f230705941cefb3d6"
  },
  {
    "url": "python.html",
    "revision": "203435c83f5841b5462e2f8316c37083"
  },
  {
    "url": "pytorch.html",
    "revision": "310ad3a5741ceb732df649c98cd98b60"
  },
  {
    "url": "tendermint.html",
    "revision": "13298dc38d0cd219664d64cebf5cf760"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
