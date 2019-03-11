const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send({ test: 'test' })
})

app.post('/api', (req, res) => {
    console.log(req.body)
    res.send({ confirm: 'data passed' })
})

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server liten on port', port)
})