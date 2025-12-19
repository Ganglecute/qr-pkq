self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("qr-pwa").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./script.js",
        "./style.css",
        "./manifest.json"
      ]);
    })
  );
});
https://Ganglecute.github.io/qr-pkq/