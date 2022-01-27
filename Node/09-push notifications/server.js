//Express
const express = require('express');

//web-push
const webpush = require('web-push');

//body-parser
const bodyParser = require('body-parser');

//path
const path = require('path');

//using express 
const app = express();

//using bodyparser
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

//storing the keys in variables
const publicVapidKey = 'BL1gIHBN3kYTGItGf9US4wdDSZLYnLpfMePTTWCHVu2Sc4VTDVC-zAcuvzLyZjU6vkf43uIe5Oa4ZiYwBSCGvX8';
const privateVapidKey = 'wxmv2e978XyygFYTB0Y_MMX3vUtfWRaoqDPj7QfVI30';


app.use(express.static('client/build'))

//subscribe route
app.post('/subscribe', (req, res)=>{
    //get push subscription object from the request
    const subscription = req.body;

    //send status 201 for the request
    res.status(201).json({})

    //create paylod: specified the detals of the push notification
    const payload = JSON.stringify({title: 'Section.io Push Notification' });

    //pass the object into sendNotification fucntion and catch any error
    webpush.sendNotification(subscription, payload).catch(err=> console.error(err));
})

app.listen(port, ()=>{
    console.log(`Server listen on port: ${port}`)
})