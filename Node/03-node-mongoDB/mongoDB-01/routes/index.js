var express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/sampleDB";

router.get("/api", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("sampleDB");

    dbo
      .collection("students")
      .find()
      .toArray()
      .then(result => {
        if (err) throw err;
        res.send(result);
        db.close();
      })
      .catch(err => {
        console.log(err);
      });
  });
});

module.exports = router;
