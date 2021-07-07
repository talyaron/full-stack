const express = require('express')
const app = express()
const port = process.env.PORT||3000
const bodyParser = require('body-parser');


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const routes = require('./routes/index');
app.use('/', routes);

app.get('/api', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sampleDB");

        
        
        dbo.collection("students").find().toArray().then(result=> {
            if (err) throw err;
            res.send(result)
            db.close();
        })
        .catch(err=>{
            console.log(err)
        });
    });
})

app.listen(port, () => console.log(`server listening on port ${port}!`))