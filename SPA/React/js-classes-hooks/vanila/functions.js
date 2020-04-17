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
            const {success, redirect} = res2;
            if(success){
                if(redirect){
                    window.location.replace(redirect);
                }
            }
        })).catch(err => {
            console.log(err)
        })
}

function login(e) {
    e.preventDefault();


    const { email, password } = e.target.elements;
    fetch('/login', {
        method: "POST",
        body: JSON.stringify({ email: email.value, password: password.value }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()
        .then(res2 => {
            console.log(res2)
            const {success, redirect} = res2;
            if(success){
                if(redirect){
                    window.location.replace(redirect);
                }
            }
        })).catch(err => {
            console.log(err)
        })
}
