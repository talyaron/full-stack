// const express = require('express')
// const app = express();
const yargs = require('yargs');
const fetch = require('node-fetch');



const arguments = yargs.argv._

console.log(arguments)

const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'chat_room'
});


if (arguments.includes('test')) {
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

                pool.end(function (err) {
                    if (err) throw err;
                    console.log('ended pooling');
                    // all connections in the pool have ended
                });
            })
        })


    } catch (err) {
        console.log('Error:', err)
    }
}



const newNames = new Promise((resolve, reject) => {
    fetch('http://names.drycodes.com/60?separator=space')
        .then(res => { res.json().then(data => { 
            let names = []
            data.forEach(fullname=>{
                let fullNameArray = fullname.split(' ');
                names.push({name:fullNameArray[0], surename:fullNameArray[1]});
            })
            resolve(names) }) }).catch(err => { reject(err) })
})

const newFilms = new Promise((resolve, reject) => {
    fetch('http://names.drycodes.com/10?nameOptions=films')
        .then(res => { res.json().then(data => { resolve(data) }) }).catch(err => { reject(err) })
})
function query1(name, connection) {
    return new Promise((resolve, reject) => {
        const age = Math.floor((Math.random()*80)+20);
        console.log('age....', age)

        connection.query(`INSERT INTO authors (name,surename, password, age) VALUES ('${name.name}','${name.surename}' , '${name.name}${Math.floor(Math.random() * 1000)}', ${Math.floor((Math.random()*80+20))});`, (error, result, fields) => {
            if (error) reject(error);
           
            resolve()
            connection.release();


        })
    })
}


if (arguments.includes('authors')) {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        (async () => {
            let names = await newNames;
            

            console.log(names)

            names.forEach(async name => {
               
                await query1(name, connection)
                console.log('gotcha')
            })

            pool.end(function (err) {
                if (err) throw err;
                console.log('ended pooling');
              
            });



        })()
    })
}

const newMessages = new Promise((resolve, reject)=>{
    fetch('http://www.randomtext.me/api/gibberish/p-100/24-56')
    .then(res=>{res.json().then(paragraphs=>{
        console.log(paragraphs)
        let x = []
        let sentences = paragraphs.text_out.replace('<p>', '').replace('</p>','');
        let resArray = paragraphs.text_out.split('\r')
        resArray.forEach(sent=>{
            x.push(sent.replace('<p>', '').replace('</p>',''))
        })
       
        
        resolve(x)
    })})
    
})

function addMessages(message, connection) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO messages (author_id, message,date) VALUES ('${Math.floor((Math.random()*100))}','${message}' , '2020-03-31');`, (error, result, fields) => {
            if (error) reject(error);
           
            resolve()
            connection.release();


        })
    })
}

if (arguments.includes('messages')) {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        (async () => {
            let messages = await newMessages;
            

            console.log(messages)

            messages.forEach(async message => {
               
                await addMessages(message, connection)
                console.log('gotcha2')
            })

            pool.end(function (err) {
                if (err) throw err;
                console.log('ended pooling');
              
            });



        })()
    })
}

console.log('end of run')




// const port = process.env.PORT || 3001;
// app.listen(port, () => { console.log('server listen on port', port) })