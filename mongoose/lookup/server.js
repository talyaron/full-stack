//lookup finds all the members in another collection that has the same "value" as in the current collection
//thi is an example that find all users that are fan of each group


const express = require('express');
const app = express();

//body parser
var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))


// mongoose
const mongoose = require('mongoose');
const url = 'mongodb+srv://tal1:7BCWK39lvemVRQNH@tal-test1.m39if.mongodb.net/test';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const FootballTeam = mongoose.model('FootballTeam', { //collection
    title: String,
    place: Number
});

const Fan = mongoose.model('Fan', {
    name: String,
    hobie: String,
    fanOf: String
})

const footballTeams = [
    { title: 'macabi-tel-aviv', place: 1 },
    { title: 'hapoel-rishon', place: 2 },
    { title: 'elitzur-nharia', place: 3 },
    { title: 'beitar-jerusalem', place: 4 },
    { title: 'neve-hamtzizim', place: 5 },

]

const fans = [
    { name: 'y1', hobie: 'aa', fanOf: 'macabi-tel-aviv' },
    { name: 'y2', hobie: 'bb', fanOf: 'macabi-tel-aviv' },
    { name: 'y3', hobie: 'bb', fanOf: 'hapoel-rishon' },
    { name: 'y4', hobie: 'bb', fanOf: 'elitzur-nharia' },
    { name: 'y5', hobie: 'bb', fanOf: 'beitar-jerusalem' },
    { name: 'y6', hobie: 'bb', fanOf: 'beitar-jerusalem' }
]


// Fan.insertMany(fans).then(docs => {

//     console.log(docs)
// }).catch(e=>{console.error(e)})




app.get('/get-groups-and-groupFans', async (req, res) => {
    try {
        let docs = await FootballTeam.aggregate([
            // { $match : { fanOf :{$exists:true }} } ,
            {
                $lookup: {
                    from: 'fans',
                    localField: 'title',
                    foreignField: 'fanOf',
                    as: 'fans'
                }
            }
        ])

        res.send(docs)
    } catch (e) {
        console.log(e)
    }
})


app.get('/get-fans-and-group', async (req, res) => {
    try {
        let docs = await Fan.aggregate([
            // { $match : { fanOf :{$exists:true }} } ,
            {
                $lookup: {
                    from: 'footballteams',
                    localField: 'fanOf',
                    foreignField: 'title',
                    as: 'team'
                }
            }
        ])

        res.send(docs)
    } catch (e) {
        console.log(e)
    }
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server listen on port ', port))
