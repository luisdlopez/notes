/* eslint-disable no-undef */

// act as interface for indexedDB
// expose calls for the following actions:
  // create note
  // edit note
  // archive note
  // delete store (to test app with no data)

self.addEventListener('install', event => {
  console.log('Service worked installed')
})
