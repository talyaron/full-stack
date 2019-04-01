const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const yargs = require('yargs');
const arguments = yargs.argv._
console.log(arguments)

//Local
var url = "mongodb://localhost:27017/mydb";

//nodeChef
// var url = 'mongodb://nodechef-mongo-6060:Nos8DzRE5xYRUPCERykiNf9a20THxV@db-nodechef-mongo-6060.nodechef.com:5384/nodechef-mongo'

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));





if (arguments == 'create') {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("nodechef-mongo");
        dbo.createCollection("customersTal", function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
            // res.send({ data: "Collection created!" })
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

        
        dbo.collection("customers").insertOne(newUser, (function (err, result) {
            if (err) throw err;
            res.send(result)
            db.close();
        })
        );
    });
})

app.listen(port, () => console.log(`server listening on port ${port}!!!`))