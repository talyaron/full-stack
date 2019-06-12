var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors');
const mongoose = require('mongoose');

//Local

const yargs = require('yargs');

const arguments = yargs.argv
console.log(arguments);

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
const MessageModelSchema = new Schema({
  name: String,
  message: String,  
  date: Date
});

// create collection (model) with it's schema
const MessageModel = mongoose.model('myModel', MessageModelSchema);

// Create an instance of model SomeModel
var newMessage = new MessageModel({ name: 'awesome', message: "bla", date: new Date() });

// Save the new model instance, passing a callback
if (arguments.create) {
  newMessage.save(function (err) {
    if (err) return handleError(err);
    console.log('saved')
  });
}

app.use(cors());

io.on('connection', function(socket){
  console.log('a user connected');

  

  socket.on('chat message', function(msg){
    

    //save message to db
    let newMessage = new MessageModel({ name: 'me', message: msg, date: new Date() });
    newMessage.save(function (err) {
      if (err) return handleError(err);
      console.log('saved')
    });

    console.log('message: ' + msg);
    io.emit('chat message', { name: 'me', message: msg, date: new Date() }  );
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});


app.get('/messages', (req, res) => {
  MessageModel.find({}, (err, docs) => {
    if (err) throw err;
   
    res.send({ messages: docs })
  }).sort({ 'date':-1 }).limit(20)
})

