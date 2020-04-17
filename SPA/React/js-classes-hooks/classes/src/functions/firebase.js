import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC0cCt2TyZOdo4MaxBxN2LAqwoWKPIMRYo",
    authDomain: "fs3-pintegram.firebaseapp.com",
    databaseURL: "https://fs3-pintegram.firebaseio.com",
    projectId: "fs3-pintegram",
    storageBucket: "fs3-pintegram.appspot.com",
    messagingSenderId: "611402642005",
    appId: "1:611402642005:web:9d2285edf62cd01d135adc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore();
// export const storage = firebase.storage().ref();

export function login(e) {
    e.preventDefault();

    var provider = new firebase.auth.GoogleAuthProvider();



    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.error(error)
        // ...
    });

}

export function listenToLogin(props) {
    const {picHandler} = props;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user)
            const { photoURL } = user;
            console.log(typeof photoURL)

            if (photoURL) {
                
                picHandler(true, photoURL)
               
            }
            console.log('User is signed in.');
        } else {
            console.log(' No user is signed in.');
            picHandler(false, '')
        }
    });
}


export function logout() {

    firebase.auth().signOut().then(function () {
        console.info('Logout succesfull')
    }).catch(function (error) {
        console.error(error);
    });

}
