import React, { useState } from "react";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyBW4Ty8cdaUGohEbBwXkoPGe_fh_yDz5zM",
    authDomain: "delibtests.firebaseapp.com",
    databaseURL: "https://delibtests.firebaseio.com",
    projectId: "delibtests",
    storageBucket: "delibtests.appspot.com",
    messagingSenderId: "612739213308",
    appId: "1:612739213308:web:0fbf387e2c9919d8"
});

var DB = firebase.firestore();




function Listen() {

    const [power, setPower] = useState(0)

    


    // function listenToDB() {
    //     return DB.collection('tests').doc('test1').onSnapshot(docDB => {

    //         console.log(docDB.data().power);
    //         setPower(docDB.data().power);

    //     })
    // }

    return (
        <h1>Power: {power} watts</h1>
    )
}

export default Listen;