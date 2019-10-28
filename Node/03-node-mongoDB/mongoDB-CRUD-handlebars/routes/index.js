const express = require("express");
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/sampleDB";

router.get("/", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;

    const students = db.db("sampleDB").collection("students");

    students
      .find()
      .sort({insertTime:-1})
      .toArray()
      .then(result => {
        if (err) throw err;

        res.render("students", { students: result });
        db.close();
      })
      .catch(err => {
        console.log(err);
      });
  });
});

router.post("/addStudent", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    let newStudent = req.body;
    const students = db.db("sampleDB").collection("students");
    newStudent.insertTime = new Date().getTime();
    newStudent.average = "not set";

    students
      .insertOne(newStudent)
      .then(result => {
        if (err) throw err;
        res.redirect("/");
      
      })
      .catch(err => {
        console.log(err);
      });
      db.close();
  });
});

router.delete('/deleteStudent',(req, res)=>{
  console.log('delete:')
  
  const {studentId} = req.body;
  
 
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    
    const students = db.db("sampleDB").collection("students");
    

    students
      .deleteOne( {_id: ObjectId(studentId)})
      .then(result => {
        if (err) throw err;
        console.log(`students deleted: ${result.deletedCount}`);
        res.redirect(303, "/");
      
      })
      .catch(err => {
        console.log(err);
      });
      db.close();
  });
})

router.put('/updateAverage', (req,res)=>{
  const {grade, studentId} = req.body;
  
  
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    
    const students = db.db("sampleDB").collection("students");    

    students
      .updateOne( {_id: ObjectId(studentId)},{$set: {"average": grade}})
      .then(result => {
        if (err) throw err;
        if(result.modifiedCount == 1){
          console.log(`student grade was updated`)
          res.send({ok:"OK"});
        } else {
          console.log(`some update error`)
          res.send({error:'update error'})
        }
        
      
      })
      .catch(err => {
        console.log(err);
      });
      db.close();
  });
})

module.exports = router;
