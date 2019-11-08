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
// const url = "mongodb://localhost:27017/newDb";
const url = "mongodb+srv://talyaron:0M7WHsFWXuQ9msyQ@tal-test1-m39if.mongodb.net/sampleDB?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected!');
});

//Define a schema
const Schema = mongoose.Schema;
const Students = new Schema({
    age: Number,
    average: Number,
    insertTime:Number,
    last: String,
    name: String
});


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

// create collection (model) with it's schema
const StudentsModel = mongoose.model('students', Students);

// Create an instance of model SomeModel
const student = new StudentsModel({ name: 'Miky', last:"Mouse", age:19 });

// Save the new model instance, passing a callback
// student.save(function (err) {
//     if (err) return handleError(err);
//     console.log('saved')
// });

//save many;
StudentsModel.insertMany([{name:'Donald', last:'Duck', age:14}, {name:'Pluto', last:'Dog', age:230}])
.then(docs =>{
    console.log(docs)
}).catch(err=>{
    console.log(err)
})

// CRUD
// https://mongoosejs.com/docs/queries.html

StudentsModel.find({ name: 'Miky' }, (err, docs) => {
    if (err) throw err;
    console.log('found', docs)
})



app.listen(port, () => console.log(`server listening on port ${port}!!!`))