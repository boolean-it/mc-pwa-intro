// REGISTRAZIONE SERVICE WORKER
// controllo il supporto del browser
if ('serviceWorker' in navigator) {
  // al caricamento della pagina HTML
  // registra il service worker
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(function () {
        console.log('Service worker registrato! 😎');
      });
  });
}