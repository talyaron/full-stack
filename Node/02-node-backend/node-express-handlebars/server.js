const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const people = ['Ben', 'Josef', 'Rebeka']

app.use(express.static('public'))


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { test: 'What a wanderfull world', publish: true, people: people })
})

app.get('/about', (req, res) => {
    
    res.render('about', { user: 'Tal', famelyName: 'Yaron', people: people })
})

let port = process.env.PORT || 3000;
app.set('port', port);
app.listen(app.get('port'), function () {
    console.log('Server listen on port', port)
})

//for more info:
// https://webapplog.com/handlebars/
// https://github.com/ericf/express-handlebars