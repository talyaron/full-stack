const express = require('express');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require("express-session");

const mongoose = require('mongoose');
mongoose
    .connect('mongodb://nodechef-mongo-6060:Nos8DzRE5xYRUPCERykiNf9a20THxV@db-nodechef-mongo-6060.nodechef.com:5384/nodechef-mongo',
        { useNewUrlParser: true });



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

// create new entry
// const talyaron = new User({ username: 'talyaron', password: '123' });
// talyaron.save(err => {
//     if (err) return console.error(err);
//     console.log('user wirten succesfuly to db')
// })


//configure local startegy (username and password)

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
app.use(session({ resave: true, saveUninitialized: true, secret: 'keyboard cat' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (user, done) {
    console.log('serializeUser:', user.username)
    done(null, user.username);
});

passport.deserializeUser(function (user, done) {
    console.log('deserializeUser:', user)
    done(null, user);
});


app.get('/users/:id',

    (req, res) => {
        console.log(req.user)

        if (req.user == req.params.id) {
            res.send(`<h1>This is a page for user with id: ${req.params.id}</h1>`)
        } else {
            res.send(`<h1 style='color:red'>You dont have a permission to see info for user: ${req.params.id}</h1>`)
        }


    }
)

//without failure option
app.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        res.redirect(`/users/${req.user.username}`)
        console.log('log in')

    }
)

//with failure option
app.get('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/'); }
        req.login(user, function (err) {
            if (err) { return next(err); }
            return res.redirect(`/users/${req.user.username}`);
        });
    })(req, res, next);
});



let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server listen on port', port)
})