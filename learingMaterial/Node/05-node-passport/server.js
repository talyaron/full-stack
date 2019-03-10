const express = require('express');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require("express-session");

const mongoose = require('mongoose');
mongoose.connect('mongodb://nodechef-mongo-6060:Nos8DzRE5xYRUPCERykiNf9a20THxV@db-nodechef-mongo-6060.nodechef.com:5384/nodechef-mongo');
// const MongoClient = require('mongodb').MongoClient;
// const dbUrl = 'mongodb://localhost:27017/mydb';


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected to DB!");
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
}, { collection: 'Users' });

UserSchema.methods.validPassword = function (pwd) {
    return (this.password === pwd);
};

var User = mongoose.model('User', UserSchema);


// const talyaron = new User({ username: 'talyaron', password: '123' });
// talyaron.save(err => {
//     if (err) return console.error(err);
//     console.log('user wirten succesfuly to db')
// })


passport.use(new localStrategy(
    function (username, password, done) {
        console.log('username', username)
        User.findOne({ username: username }, function (err, user) {
            console.log('found a user', user);
            console.log(err)
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log('user is OK')
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


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.get('/users/:id', (req, res) => {
    res.send(`<h1>This is a page for user with id: ${req.params.id}</h1>`)
})

app.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        res.redirect(`/users/${req.user.username}`)
        console.log('log in')
        // res.send('logged')
    }
)


// app.use(express.static('public'));

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server listen on port', port)
})