

 //simple loop:
 for (var i=0; i<4;i++){
   console.log(i);
 }

 //loop in array
 var arr = [2,'rtert',5,7,12];
 for (i in arr){
   console.log(i,': ',arr[i]);
 }

 var arr4 = [4,6,'tr',5];
 var obj = {key:45, name:'Moshe', height:180};
 var obj2 = {fields:[4,6,7,9,90,{bob:'bab'}]};
 
 console.log(obj2.fields[5].bob);

var obj = {
  a: 1,
  b: 2,
  dd: null
}

//Loop in Object
for (i in obj) {
  console.log(i + ':' + obj[i]);
}

 let i = 0;

 while (i < 4) {
   i++;
   console.log("The number is (while) " + i);
       
 }
 
 i = 0;

 do {5
   i++;
   console.log("The number is (do) " + i);
   
 } while (i < 4);




