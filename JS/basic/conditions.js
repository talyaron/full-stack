
var x = 6;
var y = 10;



if (!true) {
  console.log('x is greater the 4')
}

if (x > 8) {
  console.log('x is greater the 8')
} else {
  console.log('x is not greater than 8')
}
//
if (x > 20) {
  console.log('x is greater than 20')
} else if (x < 20 && x > 5) {
  console.log('x is smaller than 20 and greater than 5')
} else {
  console.log('some other options')
}

switch (x) {
  case 5:
    console.log('in switch x = 5');
    break;
  case 5.4:
    console.log('in switch x = 5');
    break;
  case 6:
    console.log('in switch x = 6');
    break;
  default:
    console.log('in switch x is somthing else');
}

switch (true) {
  case x === 5:
    console.log('in 2nd switch x = 5');
    break;
  case x > 5:
    console.log('in 2nd switch x = 6');
    break;
  default:
    console.log('in 2nd switch x is somthing else');
}



//
(x > 2) ? console.log('x greater than 2') : console.log('x smaller than 2');

//falsy variables:

// false
// undefined
// null
// 0
// NaN
// the empty string("")

let condition = undefined;
if (condition) {
  console.log(`${condition} this is true`);
} else {
  console.log(`${condition} this is false`);
}










