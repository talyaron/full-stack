const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static('public'))

console.log(__dirname, __filename);
let x= path.join(__dirname, 'myFile.html');
console.log(x)

app.listen(3001, ()=>{console.log('listen on port 3001')})