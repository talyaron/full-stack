//node modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var helmet = require('helmet');


const usersRoute = require('./routes/user');
const filesRoute = require('./routes/files');





app.use(helmet())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));


//routes
app.use('/files', filesRoute);
app.use('/user', usersRoute);

const port = process.env.PORT || 3012;

app.listen(port, ()=>{ console.log('server listen on port:', port)})