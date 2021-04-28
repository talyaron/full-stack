const express = require('express');
const app = express();

const mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678"


    //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("use test", (err, result, fields) => {
        if (err) throw err;
        console.log('Using test');

    });
});

app.use(express.static('public'))

app.get('/getHobbies', (req, res) => {
    try {

        con.query("SELECT * FROM hobbies", (err, result, fields) => {
            if (err) throw err;
            console.log(fields)
            res.send(result)
        });



    } catch (e) {
        res.send('Error', e.message)
    }
})

app.get('/userHobbies', (req, res) => {

    try {
        let { user } = req.query;
        user = parseInt(user);


        if (typeof user !== 'number') throw new Error("no user id was givn or it is not a number");

        const query = `select users.username as user, hobbies.hobbi_name as hobbi from users join hobbies on users.user_id = hobbies.user_id AND users.user_id = ${user}`
        con.query(query, (err, result, fields) => {
            console.log(err)
            if (err) throw err;

            res.status(200).send(result)
        });



    } catch (e) {
        console.log(e.message)
        res.status(401).send(e.message)

    }
})

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server lsten on port', port)
})