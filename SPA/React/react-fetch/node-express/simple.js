var express = require('express')
var app = express()

console.log('Press Key 1')

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log('Press Key 2')
})

console.log('Press Key 3')

app.get('/about', function (req, res) {
    
    res.send('<h1>This is about page</h1><p>Wooow!</p>')
    console.log('Press Key 4')
})

app.listen(3000)
