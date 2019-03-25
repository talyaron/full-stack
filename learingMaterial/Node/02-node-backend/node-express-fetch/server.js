const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

let users = [
    { id: 1, name: "Bar", age: 16 },
    { id: 2, name: "Shir", age: 18 },
    { id: 3, name: "Reot", age: 18 },
    { id: 4, name: 'Daraia', age: 19 }
]

app.get('/getMembers', (req, res) => {
    res.send(users)
})

app.post('/addMember', (req, res) => {
    console.log(req.body)
    let newMember = req.body;
    let lastId = users[users.length - 1].id;

    newMember.id = lastId + 1;
    users.push(newMember);

    res.send({ confirm: 'data passed' })
})

app.put('/updateMember', (req, res) => {
    let updateMember = req.body;
    console.log(updateMember)

    //find member index
    let index = users.findIndex(user => {
        return user.id == updateMember.id
    })
    users[index] = updateMember;

    res.send({ confirm: 'data passed' })
})


app.delete('/deleteMember', (req, res) => {
    let deletedMemberId = req.body;
    console.log(deletedMemberId)

    //find member index
    let index = users.findIndex(user => {
        return user.id == deletedMemberId
    })
    users.splice(index - 1, 1);

    res.send({ confirm: 'user  deleted' })
})

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server liten on port', port)
})