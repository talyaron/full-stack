let x = 4;
let y = x;
console.log('Primitives (by value)')
console.log(`x=${x}; y=${y}`)
x = 9;
console.log('x = 9')
console.log(`x=${x}; y=${y}`)

console.log('')
console.log('Objects (by refernce)')
let xObj = { a: 4 };
let yObj = xObj;
console.log(`xObj.a=${xObj.a}; yObj.a=${yObj.a}`)
xObj.a = 9;
console.log('xObj.a = 9')
console.log(`xObj.a=${xObj.a}; yObj.a=${yObj.a}`)
