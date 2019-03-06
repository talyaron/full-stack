const express = require('express');

const app = express();
let file1 = fs.re..
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.get('/about', (req, res) => {
    res.send(file1)
})

app.get('/michael', (req, res) => {
    res.send('<h1>Hi Michael2</h1><div>this is an express app</div>')
})

app.use(express.static('public'));

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server listen on port', port)
})