const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server liten on port', port)
})