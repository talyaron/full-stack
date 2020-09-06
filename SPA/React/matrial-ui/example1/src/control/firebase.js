import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyA4otZye-0fN0JfRHnElYjDnhrNeHjcioI",
    authDomain: "tests-talyaron.firebaseapp.com",
    databaseURL: "https://tests-talyaron.firebaseio.com",
    projectId: "tests-talyaron",
    storageBucket: "tests-talyaron.appspot.com",
    messagingSenderId: "66372266945",
    appId: "1:66372266945:web:1fcf1b9989104b8cdd9d40",
    measurementId: "G-DXV7BWGETD"

};
firebase.initializeApp(config);
const DB = firebase.firestore();
export default DB;