const express = require('express');
const app = express();


app.use(express.static('public'))
let count = 0;
app.get('/api/req1', (req, res) => {
    setTimeout(() => {
        console.log('go....', count)
        count++;
        res.send({ ok: true })
    }, 500)
})



app.listen(3000, () => { console.log('listen on port 3000') })