const express = require('express')
const app = express();

const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'schema1'
});



try {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query('SELECT * FROM schema1.user', (error, result, fields) => {
            if (error) throw error;
            console.log('results:', result[0]);
            console.log('fields:', fields[0]);
            
        })
        connection.query("select * from schema1.user where username = 'tal2'", (error, result, fields) => {
            if (error) throw error;
            console.log('results specific:', result[0]);
           
            connection.release();
        })
    })


} catch (err) {
    console.log('Error:', err)
} finally {
   
    // pool.end(function (err) {
    //     if (err) throw err;
    //     console.log('ended pooling');
    //     // all connections in the pool have ended
    //   });
}





const port = process.env.PORT || 3001;
app.listen(port, () => { console.log('server listen on port', port) })