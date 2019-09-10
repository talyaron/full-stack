console.log('hi all');
const argv = require('yargs').argv;


const arguments = argv._;
console.log(argv)




if(arguments.includes('hello')){
    console.log('Hello to you too')
    if(argv.y == true){
        console.log('WWWWWWOOOOOOOWWWWWW!')
    }
}
if(arguments.includes('bye')){
    console.log('Bye to you too')
}


