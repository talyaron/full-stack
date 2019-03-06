//good resources
// http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/http_basics.html

const http = require('http');

//request handler
// const server = http.createServer((req, res) => {
//     const { method, url, headers } = req;
//     console.log(method, url, headers);



// })


const server = http.createServer();
server.on('request', (req, res) => {
    // the same kind of magic happens here!
    const {
        method,
        url,
        headers
    } = req;
    // console.log(method, url, headers);

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write('<h1>Hello, All!</h1>');


    res.end();
});


server.listen(8080, () => {
    console.log('Server listen on port 8080')
})