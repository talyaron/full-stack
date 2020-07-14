const express = require('express');
const app = express();
const url = "mongodb+srv://tal1:SA7b7sT6TOsrpovW@tal-test1-m39if.mongodb.net/test?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var bodyParser = require('body-parser')


// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());




let db;
// Initialize connection once
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, database) {
    if (err) throw err;

    db = database.db("mydb");

    // Start the application after the database connection is ready
    app.listen(4000, () => {
        console.log("Listening on port 4000");
    });




});

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

app.get("/api/sum-all-costs", async function (req, res) {


    const products = db.collection("products");

    const test = await db.collection("products").aggregate(
        { $match: {} },
        { $sum: 'priceN' }
    ).limit(2);
    console.log('start:', test)



    const res2s = [];

    let res2 = products.find({}).limit(2);
    let docs = []
    await res2.forEach(doc => {
        console.log('add....')
        docs.push(doc)
    });
    console.log('final:',docs)
    res.send(docs)






});





