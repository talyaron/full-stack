function state() {

    let x = 0;
    let z = 42000
    let d = {
        a: 1,
        b: 2
    }
   
    function _state(y = 0) {
        debugger;
        if (y === 42) {
            d.a++
            return z + d.a;
        }
        x = x + y;
        console.log('inner 1', y, x);
        x++;
        console.log('inner 2', y, x);

        return x;
    }
    return _state;

}

document.addEventListener('keyup', () => {
    console.log('key')
})

let add = state();


console.log(add(3));
console.log(add(4));

console.log(add(42));
console.log(add());
console.log(add(42));
console.log(add());
console.log(add());
console.log(add());
console.log(add());
