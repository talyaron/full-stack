const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const webpush = require("web-push");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')))

const publickKey = 'BMqsH2Mx6jZGIlhh1nC9hI-ivxzWQLa3_5M00Bssuf0bAqEb53ROH1__x-CQvL-1aS3UXP3TjpN1vA7HWPsKLtI';
const privateKey = 'jf9c1p6kgeI6DdOXelv1ulBgn1JG5JfK07IycOmvt6s';

webpush.setVapidDetails('mailto:tal.yaron@gmail.com', publickKey, privateKey)

//subscribe route
app.post('/subscribe', (req, res) => {
    //get subscription
    const subscription = req.body

    //resource created
    res.status(201).json({});

    const payLoad = JSON.stringify({ title: 'Push testing :-)' })


    //  
    webpush.sendNotification(subscription, payLoad).catch(err => { console.error(err) })
})

let PORT = 5000;
app.listen(PORT, () => { console.log(`server listen on port ${PORT}`) });