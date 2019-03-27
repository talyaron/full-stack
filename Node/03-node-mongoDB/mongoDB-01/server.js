const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));





app.get('/api', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        var mysort = { name: -1 };
        dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
            if (err) throw err;
            res.send(result)
            db.close();
        });
    });
})

app.listen(port, () => console.log(`server listening on port ${port}!`))