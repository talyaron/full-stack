// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAjyyjWM63PSjyRoDI-87MpRtfOFnOO0aA",
    authDomain: "delib21-aaeb0.firebaseapp.com",
    databaseURL: "https://delib21-aaeb0.firebaseio.com",
    projectId: "delib21-aaeb0",
    storageBucket: "delib21-aaeb0.appspot.com",
    messagingSenderId: "845650714645",
    appId: "1:845650714645:web:d5f440ae9aaedc150bae1c",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
const {data} = payload;
const {score, time, teams, logoSrc} = data;

    const notificationTitle = 'Match update';
    const notificationOptions = {

      body: `${teams} score: ${score}, at ${time}`,
      icon: `${logoSrc}`
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });