const express = require('express')
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
   
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'schema1'
});



try {
    connection.connect();
       

        connection.query('SELECT * FROM schema1.user', (error, result, fields) => {
            if (error) throw error;
            console.log('results:', result);
            console.log('fields:', fields);
            
        })
        connection.query("select * from schema1.user where username = 'tal2'", (error, result, fields) => {
            if (error) throw error;
            console.log('results specific:', result);
           
            
        })
    


} catch (err) {
    console.log('Error:', err)
} finally {
    connection.end();
    
}





const port = process.env.PORT || 3001;
app.listen(port, () => { console.log('server listen on port', port) })