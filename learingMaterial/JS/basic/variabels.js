var t = '45';
console.log('this is t: ', t);



//use console log to write to console
console.log('ready to run js');

//variables
var x = 'test';



//in js variables can shift types
x = 34;
console.log('this is x: ', x);

//object
x = { 'one': 1, 'two': { name: "Shlomi", age: 23 } };
console.log('this is x: ', x);
var y = x;
console.log('this is y: ', y);
x = 56;
console.log('this is y: ', y);

//Objects and Arrays

var myArray = [];
var myObj = {};

myArray = [3, 5, 6, 7];
myObj = { a: 1, b: 2 };
console.dir(myArray);
console.dir(myObj);

console.log(myArray[2]);
console.log(myObj.a);
console.log(myObj['b']);


myArray = 45;
console.log(myArray);

var t = 3, j = "y";

//primitives and references

