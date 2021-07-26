const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('<h1>Hello Masha</h1>')
})

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server listen on port', port)
})