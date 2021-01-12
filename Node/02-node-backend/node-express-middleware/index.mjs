import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';

app.use(cookieParser())


//app middle ware

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})


//specific middleware
function checkCoockies(req, res, next) {
    console.log('checked coockies');

    console.log(req.cookies);

    const oneDayToMilliSeconds = 24 * 60 * 60 * 1000;

    res.cookie('UserId', 'testing', { maxAge: oneDayToMilliSeconds, })
    next()
}

function printHeaders(req, res, next){
    console.log(req.headers);

    next()
}

app.get('/', checkCoockies, printHeaders, function (req, res, next) {
    res.send('<h1>Test passed</h1>')
})

app.listen(3000, () => {
    console.log('server listen on port 3000');
})