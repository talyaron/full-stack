//based on "Learn Coding Tutorials" https://www.youtube.com/watch?v=G0BzzuXS8gI

//CRUD
//Create/POST
//Read/GET
//Update/PUT
//Delete/DELETE

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

var products = [
    { id: 1, name: 'laptop', friend:'David' },
    { id: 2, name: 'PC', friend:'Tomer' },
    {id: 3, name: 'tablet', friend:'Tal Merkel'}
];
var currentId = 3;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//get
app.get('/ajax', (req, res) => {
    res.send(products)
});

//post
app.post('/ajax', (req, res) => {
    var productName = req.body.name;
    var friendName = req.body.friend;
    currentId++;
    products.push({
        id: currentId,
        name: productName,
        friend: friendName
    });
    res.send('Succses')
})

app.put('/ajax/:id', (req, res) => {
    let id = req.params.id;
    let newName = req.body.name;
    let newFriend = req.body.friend;

    let productIndex = products.findIndex((product) => { return product.id == id });
    if (productIndex >= 0) {

        products[productIndex].name = newName;
        products[productIndex].friend = newFriend;
        res.send('succesfully update product')
    } else {

        res.send('couldnt find product id');
    }
})

app.delete('/ajax/:id', (req, res) => {
    console.log('delete')
    let id = req.params.id;
    let productIndex = products.findIndex((product) => { return product.id == id });
    if (productIndex >= 0) {
        currentId--;
        products.splice(productIndex, 1);
        res.send('succesfully deleted product')
    } else {

        res.send('couldnt find product id');
    }
})



let port = process.env.PORT || 3008;
app.set('port', port);
app.listen(app.get('port'), function () {
    console.log('Server listen on port', port)
})