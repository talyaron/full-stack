const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

// app.use(express.static('public'));

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server liten on port', port)
})