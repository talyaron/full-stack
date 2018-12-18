const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

var data = {
    1: 'This is one',
    2: "This is two"
}

app.use(express.static('public'));


app.use(bodyParser.urlencoded(
    { extended: true }
));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//send data according to form-input
app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/form', function (req, res) {
  
    res.redirect('/results/' + req.body.id);
    
});


app.get('/results/:id', (req, res) => {

    var dataName = '';
    if (req.params.id in data) {
        dataName = data[req.params.id]
    } else{
        dataName = 'Data has no name';
    }

    res.render('results', { id: req.params.id, idName: dataName })
})





let port = process.env.PORT || 3010;
app.set('port', port);
app.listen(app.get('port'), function () {
    console.log('Server liten on port', port)
})