
//anonymous function and regular function
function addition(x, y) {
  return x + y;
}

console.log(addition(3, 7));

var addition2 = function (x, y) {
  return x + y;
}

console.log(addition2(7, 9))


var addition3 = (x, y) => {
  return x + y;
}

console.log(addition3(10, 20))

var ready = function () {
  //    console.log('ready for functions');
  //  
  //    writeName('Tal');
  //    writeLastName('Yaron')
  //    console.log(typeof( 'my age is: '+ calculateAge(1971,2018)+6))
  //    console.log(typeof(calculateAge(1994,2018)))
  //  
  //    console.log(calculateAge(34,2018));
  //    console.log(writeLastName);
};



var writeName = function (name = 'Yegal') {
  console.log('your name is: ' + name);


}

writeName('Sagiv');

function multy(a, b) {
  return a * b;
}

console.log(multy(2, 4));



//  function calculateAge (bornYear){
//
//    return currentYear-bornYear;
//  }
//
//  console.log(calculateAge(1976));
//  var x = 'local';
//  console.log('local: ',x);
//  console.log(x);
//
//  zz='zzzzzzzz';
//  console.log(zz);
//  writeLastName();
// }

//console.log('global1: ',g_x);
//var currentYear = 2018;
//
//var g_x= 'global';
//console.log('global2: ',g_x);
//
//function writeLastName(lastName){
//  console.log('your name last is: '+lastName);
//  console.log('zzzzz...',zz)
//}



