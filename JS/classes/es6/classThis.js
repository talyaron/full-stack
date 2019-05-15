var name = 'underWindow';

class myClass {
    constructor() {
        // this.methodA = this.methodA.bind(this)
    }

    name = 'Moshe';
    methodA() {
        console.dir(this)
        console.log(`the name is ${this.name}`);
        this.methodB();

    };
    methodB() {
        console.log('this is method B')
    }

    methodAArrow = () => {
        console.dir(this)
        console.log(`the name is ${this.name}`);
        this.methodBArrow();
    }

    methodBArrow() {
        console.log('this is method B')
    }
}

let instance = new myClass();
// instance.methodA();

setTimeout(instance.methodA, 500);
setTimeout(instance.methodAArrow, 500);


document.getElementById('pushButton').addEventListener('click', instance.methodA);
// document.getElementById('pushButton').addEventListener('click', () => { console.dir(this); instance.methodA() });


