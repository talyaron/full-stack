const express = require('express');
const { join } = require('path');
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'))

io.on('connection', socket => {
    console.log(socket.rooms)
    console.log('a user connected');



    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('join room', roomId => {
        console.log('roomId', roomId)
        socket.join(roomId);

    })
    // rooms

    socket.on('room', roomId => {
        socket.join(roomId);
    })

    socket.on(`chat room message`, msgObj => {
        msgObj = JSON.parse(msgObj);

        console.log(msgObj);

        io.sockets.in(msgObj.roomId).emit('chat room message', msgObj.msg);
    })
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});