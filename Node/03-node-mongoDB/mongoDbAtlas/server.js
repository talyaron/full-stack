
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://talyaron:Yuva1)))@tal-test1-m39if.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
const assert = require('assert');

client.connect(err => {

    const collection = client.db("tal-db-test1").collection("dogs");
    // perform actions on the collection object
    collection.insertOne({ name: 'Browny' }, (err, res) => {
        assert.equal(null, err);
        console.log('Item inserted')
    })

    client.close();


});