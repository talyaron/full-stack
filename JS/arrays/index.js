const x = 100;
function multi(a,b){
    return a*b
}
const appleSmith={
    type:"Smith",
    price:20,
    inStock:4000
}

const appleJonthan={
    type:"Jonathan",
    price:12,
    inStock:2000
}

const appleGreen={
    type:"Green",
    price:9,
    inStock:20000
}
const apples = [appleSmith, appleJonthan,appleGreen];

apples.forEach(apple=>{
    console.log(apple.type)
})
const applesTypes = apples.map(apple=>{
    return `We have ${apple.type} and it costs ${apple.price} NIS`;
})

console.log(applesTypes)

