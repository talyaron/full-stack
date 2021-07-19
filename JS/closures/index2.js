function state() {

    let x = 0;
   
   
    function _state(y=0) {
   
       
        x=x+y;
      

        return x;
    }
    return _state;

}


let add = state();

console.dir(state);
console.dir(add)


console.log(add(3));
console.log(add(4));

console.log(add(42));

