const _ = require('lodash');
const os = require('os');
let myPeople = [
    {name: 'vera',children:1 },
    {name: 'tomer',children:0 },
    {name: 'idan',children:0 },
]


let sortedPeople = _.sortBy(myPeople, ['name', 'children']);
console.log(sortedPeople)
console.log(os.freemem())