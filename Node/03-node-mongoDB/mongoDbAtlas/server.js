const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://talyaron:<password>@tal-test1-m39if.mongodb.net/test?retryWrites=true";

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));






// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });



const client = new MongoClient(url, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");

//     var mysort = { name: -1 };
//     dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
//         if (err) throw err;
//         res.send(result)
//         db.close();
//     });
// });


app.listen(port, () => console.log(`server listening on port ${port}!`))
