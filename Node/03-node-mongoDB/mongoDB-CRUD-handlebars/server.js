const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");
const yargs = require("yargs");




const arguments = yargs.argv;

if (arguments.init) {
  const MongoClient = require("mongodb").MongoClient;
  const url = "mongodb://localhost:27017/sampleDB";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("sampleDB");
    const students = [
      { name: "Micheal", last:"Boorg", average: 78 },
      { name: "Motti", last:"Hill", average: 90 },
      { name: "Hana",last:"Mount", average: 92 }
    ];
    dbo
      .collection("students")
      .insertMany(students)
      .then(res => {
        if (err) throw err;
        console.log(res);
        console.log("1 document inserted");
        db.close();
      })
      .catch(err => {
        console.log(err);
      });
  });
}



app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const publicPath = path.join(__dirname, './views');
app.use('/', express.static(publicPath));


const routes = require("./routes/index");
app.use("/", routes);



app.listen(port, () => console.log(`server listening on port ${port}!`));
