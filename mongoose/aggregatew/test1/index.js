const express = require('express');
const app = express();
const url = "mongodb+srv://tal1:SA7b7sT6TOsrpovW@tal-test1-m39if.mongodb.net/cars?retryWrites=true&w=majority";

//body parser
var bodyParser = require('body-parser');
// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Car = mongoose.model('Car', {
    name: String,
    price: Number
});

const bmw = new Car({ name: 'bmw', price: 1400 });
// bmw.save().then(() => console.log('meow2'));

const filter = { price: { $gte: 1300, $lte:1500} };
(async () => {

    let docs = await Car.aggregate([
        { $match: filter },
        {$group:{
            _id:null,
            total: {$sum:'$price'}
        }}
    ])

    console.log(docs)
})()




app.get("/api/get-all-products", function (req, res) {
    db.collection("products").find({}, (err, docs) => {
        const results = []
        docs.each(function (err, doc) {
            console.log(doc);

            if (doc) {
                results.push(doc)
            }
            else {
                res.send(results);
            }
        });
    });
});

app.get('/api/get-all-lipstick', (req, res) => {
    db.collection('products').find({ type: 'lipstick' }, (err, docs) => {
        const results = []
        docs.each(function (err, doc) {
            if (err) console.log('Error', err);


            console.log(doc);

            if (doc) {
                results.push(doc)
            }
            else {
                res.send(results);
            }
        });
    })
})

app.put('/api/update-color', (req, res) => {
    const { product, newColor } = req.body;
    console.log(product);
    console.log(newColor)
    console.log(product._id)
    const id = new ObjectID(product._id);
    //find the specific product and update it
    const myQuery = { _id: id };

    const newValues = { $set: { color: newColor } };

    db.collection("products").updateOne(myQuery, newValues, function (err, res) {
        if (err) console.log(err);
        console.log("1 document updated");

    });

    res.send({ success: true })
})



