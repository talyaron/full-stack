const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Local

const yargs = require('yargs');

const arguments = yargs.argv._

console.log(arguments)

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//connect mongoDB
const url = "mongodb://localhost:27017/newDb";
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected!');
});

//Define a schema
const Schema = mongoose.Schema;
const SomeModelSchema = new Schema({
    name: String,
    last: String,
    age:Number,
    date: Date
});

for (i=0; i<10;i++){
//Schema types can be:

// String
// Number
// Date
// Buffer - https://hackernoon.com/https-medium-com-amanhimself-converting-a-buffer-to-json-and-utf8-strings-in-nodejs-2150b1e3de57
// Boolean
// Mixed - https://mongoosejs.com/docs/schematypes.html#mixed
// ObjectId
// Array
// Decimal128
// Map
}
// create collection (model) with it's schema
const SomeModel = mongoose.model('myModel', SomeModelSchema);

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome', last:"bla", age:12 });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
    if (err) return handleError(err);
    console.log('saved')
});

// CRUD
// https://mongoosejs.com/docs/queries.html

SomeModel.find({ name: 'awesome' }, (err, docs) => {
    if (err) throw err;
    console.log('found', docs)
})






if (arguments == 'create') {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("nodechef-mongo");
        dbo.createCollection("customers", function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
            res.send({ data: "Collection created!" })
        });
    });
}


if (arguments == 'setNew') {

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("nodechef-mongo");
        var myobj = [
            { name: 'John', address: 'Highway 71' },
            { name: 'Peter', address: 'Lowstreet 4' },
            { name: 'Amy', address: 'Apple st 652' },
            { name: 'Hannah', address: 'Mountain 21' },
            { name: 'Michael', address: 'Valley 345' },
            { name: 'Sandy', address: 'Ocean blvd 2' },
            { name: 'Betty', address: 'Green Grass 1' },
            { name: 'Richard', address: 'Sky st 331' },
            { name: 'Susan', address: 'One way 98' },
            { name: 'Vicky', address: 'Yellow Garden 2' },
            { name: 'Ben', address: 'Park Lane 38' },
            { name: 'William', address: 'Central st 954' },
            { name: 'Chuck', address: 'Main Road 989' },
            { name: 'Viola', address: 'Sideway 1633' }
        ];
        dbo.collection("customers").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });

}



app.get('/getUsers', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("nodechef-mongo");

        var mysort = { name: -1 };
        dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
            if (err) throw err;
            res.send(result)
            db.close();
        });
    });
})

app.post('/addUser', (req, res) => {
    let newUser = req.body;

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("nodechef-mongo");

        var mysort = { name: -1 };
        dbo.collection("customers").insertOne(newUser, (function (err, result) {
            if (err) throw err;
            res.send(result)
            db.close();
        })
        );
    });
})

app.listen(port, () => console.log(`server listening on port ${port}!!!`))