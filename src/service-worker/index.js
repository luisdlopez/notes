// setup copied from http://michalzalecki.com/progressive-web-apps-with-webpack/
import swURL from 'file?name=sw.js!babel!./sw'

// register servide worker
export function register () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator
        .serviceWorker
        .register(swURL)
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope)
        })
        .catch(err => {
          console.log('ServiceWorker registration failed: ', err)
        })
    })
  }
}
