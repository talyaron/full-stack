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
    const { method, url, headers } = req;
    // console.log(method, url, headers);

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('<h1>Hello, World!</h1>');


    res.end();
});


server.listen(3000, () => {
    console.log('Server listen on port 3000')
})