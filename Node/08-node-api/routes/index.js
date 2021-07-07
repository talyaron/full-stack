var express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://tal1:z6CpE8X8HpaVferj@tal-test1.m39if.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

router.get("/api", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    const dbo = db.db("sampleDB");

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

router.get("/api/getStudentById", (req, res) => {
  try {
    const {id} = req.query;
    if(!id) throw new Error('No id in query')
   
    MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
      if(err) throw err;

      const dbo = db.db("sampleDB");

      dbo.collection("students").find({id}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result)
        db.close();
      });

      
    })
  } catch (error) {
    console.log(error.message);
    res.status(400).send({error:error.message})
  }
})

router.post("/api/addStudent", (req, res) => {
  try {
    const {name,id} = req.body;
    console.log(req.body)
    MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
      if(err) throw err;

      const dbo = db.db("sampleDB");

      const newStudent = { name, id };
      dbo.collection("students").insertOne(newStudent, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });

      res.status(200).send({recived:true})
    })
  } catch (error) {
    console.log(error);
    res.status(400).send({error})
  }
})

module.exports = router;
