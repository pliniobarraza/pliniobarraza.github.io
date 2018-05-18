// importScripts('/__/firebase/3.8.0/firebase-app.js');
// importScripts('/__/firebase/3.8.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

importScripts('https://www.gstatic.com/firebasejs/5.0.1/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.1/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/init.js');


//could not find this init script on the gstatic so I am including its contents here 

if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyBOdfDbflfmAXcgzsUaHjyfJ3njWO8k9XY",
  "databaseURL": "https://friendlychat-ede27.firebaseio.com",
  "storageBucket": "friendlychat-ede27.appspot.com",
  "authDomain": "friendlychat-ede27.firebaseapp.com",
  "messagingSenderId": "108673168113",
  "projectId": "friendlychat-ede27"
});




https://www.gstatic.com/firebasejs/5.0.2/

firebase.messaging();
