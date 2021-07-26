//good resources
// http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/http_basics.html

const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;


const server = http.createServer();


server.on('request', (req, res) => {
    try {

        // the same kind of magic happens here!
        const {
            method,
            url,
            headers
        } = req;

        console.log('method:', method, 'url:', url, 'headers', headers);


        for (let i in headers) {
            console.log(i, headers[i]);
        }

        //get json

        if (method === 'GET') {
           
            switch (url) {
                case '/Somewhere':
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end('<h1>Going some where</h1>');
                    break;
                case '/get_data':
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ok:true}));
                    break;
                case '/':
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    fs.readFile('index.html', 'utf8', (err, file) => {
                        if (err) throw err;

                        res.end(file)
                    })
                default:
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    fs.readFile('index.html', 'utf8', (err, file) => {
                        if (err) throw err;

                        res.end(file)
                    })
            }
            
        } else if (method === 'POST') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end('<h1>You posted somtheing</h1>');
        }
    } catch (e) {
        console.log(e);
        res.writeHead(503, {
            'Content-Type': 'text/html'
        });
        res.end(`<h1>Server error</h1><h3>${e.message}</h3>`)
    }


});


server.listen(port, () => {
    console.log('Server listen on port', port)
})