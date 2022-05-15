// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { vapidKey } from "../../env";
import axios from "axios";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjyyjWM63PSjyRoDI-87MpRtfOFnOO0aA",
  authDomain: "delib21-aaeb0.firebaseapp.com",
  databaseURL: "https://delib21-aaeb0.firebaseio.com",
  projectId: "delib21-aaeb0",
  storageBucket: "delib21-aaeb0.appspot.com",
  messagingSenderId: "845650714645",
  appId: "1:845650714645:web:d5f440ae9aaedc150bae1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
export function registerToMessages() {
  getToken(messaging, { vapidKey })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        axios
          .post("/subsscribeToMessages", { token: currentToken })
          .then(({data}) => {
            console.log(data);
          });
        // ...
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });
}
