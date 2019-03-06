const express = require('express');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
var session = require("express-session");

passport.use(new localStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

const app = express();




app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());



app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        res.redirect(`/users/${req.user.username}`)
    }

)

// app.use(express.static('public'));

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server liten on port', port)
})