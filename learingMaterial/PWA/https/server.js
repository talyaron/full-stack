var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('encryption/private.key', 'utf8');
var certificate = fs.readFileSync('encryption/mydomain.csr', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => {
    console.log('http server listen at port 8080')
});
httpsServer.listen(8443, () => {
    console.log('https server listen at port 8443')
});