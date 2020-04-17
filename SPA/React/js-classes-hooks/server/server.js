const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const posts = [], users = [];

app.post('/login', (req, res) => {

    try {

        const { email, password } = req.body;
      
        if (email == undefined || password == undefined) throw "Email or password are missing";

        //check if user exists
        const user = users.find(user => user.email === email);
        if (user === undefined) throw "Email or password are inccorect";

        //check if password is correct

        if (user.password !== undefined && user.password === password) {
            res.send({ success: true, redirect:"/feed.html"})
        } else {
            throw "Email or password are inccorect";
        }

    } catch (err) {
        console.log('Error at post login')
        console.log(err)
        res.send({ error: err })
    }


})

app.post('/register', (req, res) => {

    try {

        const { email, password } = req.body;

        console.log(email, password)
        if (email == undefined || password == undefined) throw "Email or password are missing";

        //check if user allredy exists
        const user = users.find(user => user.email === email);
        if (user !== undefined) {
            throw "User allredy exists";
        } else {
            users.push({ email, password });
            res.send({ success: true, redirect: '/index.html' })
        }
    } catch (err) {
        console.log('Error at post login')
        console.log(err)
        res.send({ error: err })
    }
})


app.post('/add-post', (req, res) => {
    console.log(req.body)
    let newMember = req.body;
    let lastId = users[users.length - 1].id;

    newMember.id = lastId + 1;
    users.push(newMember);

    res.send({ confirm: 'data passed' })
})

app.get('/get-posts', (req, res) => {

})




let port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Server listen on port', port)
})