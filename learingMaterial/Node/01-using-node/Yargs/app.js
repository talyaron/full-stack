const yargs = require('yargs');
const _ = require('lodash');


const arguments = yargs.argv._
console.log(arguments)

let isStart = _.find(arguments, (o)=>{return locateStart(o)})
if (isStart != undefined ){
    console.log("We have a START")
} else {
    console.log('no START :-(')
}

function locateStart(elm){
    return elm=='start'
}


