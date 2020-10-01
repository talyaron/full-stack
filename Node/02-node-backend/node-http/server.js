//good resources
// http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/http_basics.html

const http = require('http');


const server = http.createServer();


server.on('request', (req, res) => {
    // the same kind of magic happens here!
    const {
        method,
        url,
        headers
    } = req;

    console.log('method:', method, 'url:', url, 'headers', headers);

    console.log('headers....')
    for (let i in headers) {
        console.log(i, ': ', headers[i])
    }

    if (method == 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        console.log('url:...   ', url)
        if (url === '/Somewhere') {
            res.write('<h1>Going some where</h1>')
        } else {

            res.write('<h1>this is a get request!</h1>');
        }
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.write('<h1>Hello, World!</h1>');
    }





    res.end();
});


server.listen(3014, () => {
    console.log('Server listen on port 3012')
})