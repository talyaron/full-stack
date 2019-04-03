const express = require('express');
var cors = require('cors')

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})


let HEREOS = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

app.get('/angularRxTest', (req, res) => {
    res.send(HEREOS)
})
// app.use(express.static('public'));

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server liten on port', port)
})