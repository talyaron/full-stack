const yargs = require('yargs');



const arguments = yargs.argv._
const all = yargs.argv;
let dashed = {}
for (i in all) {
    if (all[i] === true) {
        dashed[i] = all[i]
    }
}
console.log(arguments)
console.log(all)
console.log(dashed)

let isStart = arguments.find(o => { return o == 'start'})
if (isStart != undefined ){
    console.log("We have a START")
} else {
    console.log('no START :-(')
}

