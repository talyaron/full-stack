const express = require('express')
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'schema1'
});



app.get('/allusers', (req, res) => {
    try {
        connection.connect();


        connection.query('SELECT * FROM schema1.user', (error, result, fields) => {
            if (error) throw error;
            
            res.send({result});
            console.log('Send info to client')
        })
        


    } catch (err) {
        res.send({error:err})
        console.log('Error:', err)
    } finally {
        connection.end();

    }
})






const port = process.env.PORT || 3001;
app.listen(port, () => { console.log('server listen on port', port) })