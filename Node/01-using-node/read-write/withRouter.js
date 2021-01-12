const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {

    console.log('start')
    console.log(req.url)

    if (req.url == '/rr') {

        fs.readFile('demofile.html', function (err, data) {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (req.url === '/favicon.ico') {

        const img = fs.readFileSync('./favicon.ico');
        res.writeHead(200, {'Content-Type': 'image/ico' });
        res.end(img, 'binary');

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Booo!!!!</h1>`);
        res.end();
    }
}).listen(8080);