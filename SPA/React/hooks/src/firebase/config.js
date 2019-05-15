const firebase = require('firebase/app');
require('firebase/firestore');


const config = {
    apiKey: "AIzaSyBW4Ty8cdaUGohEbBwXkoPGe_fh_yDz5zM",
    authDomain: "delibtests.firebaseapp.com",
    databaseURL: "https://delibtests.firebaseio.com",
    projectId: "delibtests",
    storageBucket: "delibtests.appspot.com",
    messagingSenderId: "612739213308",
    appId: "1:612739213308:web:0fbf387e2c9919d8"
};

firebase.initializeApp(config);
let DB = firebase.firestore();
export default DB;