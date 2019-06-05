var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors');

app.use(cors());


// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

// app.get('/', (req, res) => {
//     res.send('<h1>Hello from node server</h1>')
// })

app.get('/fetch', (req, res) => {
    setTimeout(() => {
        res.send({
            name: "Moshe",
            last: "Rabeynu"
        })
    }, 2000)

})

// app.use(express.static('public'));

// let port = process.env.PORT || 4000;

// app.listen(port, function () {
//     console.log('Server listen on port', port)
// })