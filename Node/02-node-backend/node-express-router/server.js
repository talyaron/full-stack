const express = require('express');



const app = express();




app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

const userRouter = require('./routes/users');
app.use("/users", userRouter);
const productRouter = require('./routes/products');
app.use("/products", productRouter);




app.get('/angularRxTest', (req, res) => {
    res.send(HEREOS)
})
// app.use(express.static('public'));

let port = process.env.PORT || 3100;

app.listen(port, function () {
    console.log('Server liten on port', port)
})