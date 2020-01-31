const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');

const secret = require('../keys/secret');

let users = {};
users['testingUser'] = {
    password: '123456',
    role: 'OB'
}



router.post('/login', (req, res) => {

    // const timeToExpire = 1000 * 3600 * 24 * 2; //two days
    const timeToExpire = 1000 * 10; //two days


    try {
        const { username, password } = req.body;


        console.log(username, password)
        //check user and password on db
        if (users.hasOwnProperty(username) && users[username].password === password) {

            //create a token
            let token = { role: users[username].role, username, date: new Date().getTime() }
            token = jwt.encode(token, secret)
            //TODO:  change secure to true when moving to https
            res.cookie('siteCoockie', token, { maxAge: timeToExpire, httpOnly: true, secure: false });
            res.send({redirect:'/v2.html'})

        } else {
            console.log('Username or password are not valid');
            res.send({ error: 'Username or password are not valid' })
        }

    } catch (err) {
        console.log(err)
    }


})

router.post('/register', (req, res) => {
    
})

module.exports = router;