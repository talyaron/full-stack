var fs = require('fs');
const path = require('path');
const express = require('express')
const app = express()
const port = 3000
let sync = 1, async =1;
app.use(express.static('public'))

app.get('/getImage', (req, res) => {
    try {
        console.time('readFileSync'+sync)
        const img = fs.readFileSync('./stl.jpg');
        
        res.writeHead(200, {
            'Content-Type': 'image/gif'
        });
        res.end(img, 'binary');
        console.timeEnd('readFileSync'+sync)
        sync++;
    } catch (error) {
        console.log(error)
    }
})

app.get('/getImageAsync', (req, res) => {
    try {
        console.time('readFile'+async)
        fs.readFile('./stl.jpg',(err, img)=>{
            
            res.writeHead(200, {
                'Content-Type': 'image/gif'
            });
            res.end(img, 'binary');
        });
        console.timeEnd('readFile'+async)
        async++;
        
    } catch (error) {
        console.log(error)
    }
})

app.get('/text',(req, res)=>{
    console.time('text -----------')
    res.send('good')
    console.timeEnd('text -----------')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})