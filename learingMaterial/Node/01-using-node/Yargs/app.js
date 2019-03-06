const yargs = require('yargs');

console.log(yargs.argv);
let name = yargs.argv.n;

console.log(`The name is: ${name}`)