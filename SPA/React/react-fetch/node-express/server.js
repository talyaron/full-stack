const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello from node server</h1>')
})

app.get('/fetch', (req, res) => {
    setTimeout(() => {
        res.send({
            name: "Moshe",
            last: "Rabeynu"
        })
    }, 2000)

})

// app.use(express.static('public'));

let port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Server listen on port', port)
})