function state() {

    
    let d = {
        network: undefined,
        x:0,
    }

    function _state(settings = {}) {
        const { network } = settings;
        if(network) d.network = network;
        
        let { y } = settings;
        if (y) d.x = d.x + y;

        d.x++;
        console.log('network:',d.network);

        return d;
    }
    return _state;

}

document.addEventListener('keyup', () => {
    console.log('key')
})

let add = state();


console.log(add({ y: 4 }));
console.log(add({network:()=>{}}));
console.log(add());
console.log(add());
