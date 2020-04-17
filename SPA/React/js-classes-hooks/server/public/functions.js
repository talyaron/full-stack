function register(e) {
    e.preventDefault();


    const { email, password } = e.target.elements;
    fetch('/register', {
        method: "POST",
        body: JSON.stringify({ email: email.value, password: password.value }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()
        .then(res2 => {
            console.log(res2)
            const { success, redirect } = res2;
            if (success) {
                if (redirect) {
                    window.location.replace(redirect);
                }
            }
        })).catch(err => {
            console.log(err)
        })
}

function login(e) {
    e.preventDefault();

    var provider = new firebase.auth.GoogleAuthProvider();


    // const { email, password } = e.target.elements;
    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.error(error)
    //   });

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

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user)
        const { photURL } = user;
        console.log(typeof photURL)

        if (photoURL) {
            const userImg = document.getElementById('userImg')
            userImg.style.display = 'block';
            userImg.src = photoURL
        }
        console.log('User is signed in.');
    } else {
        console.log(' No user is signed in.');
        const userImg = document.getElementById('userImg')
        userImg.style.display = 'none';
    }
});


function logout() {

    firebase.auth().signOut().then(function () {
        console.info('Logout succesfull')
    }).catch(function (error) {
        console.error(error);
    });

}

