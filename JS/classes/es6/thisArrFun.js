window.name = "Global";

console.log('--- Object ---');

var person = {
    name: "Local",
    sayName: function () {
        console.log("my name is ", this.name); //local
        // console.dir(this)
    },
    sayName2: () => {
        console.log("my name is ()=> ", this.name); //global
        // console.dir(this)
    }

};

person.sayName();
person.sayName2();


console.log('--- class ---')


class Person {
    name = 'LocalClass';
    sayName() {
        console.log('sayName: my name is', this.name);
        // console.dir(this);
    }

    sayNameArrow = () => {
        console.log('sayNameArrow: my name is', this.name);
        // console.dir(this);
    }

}

let person2 = new Person();

person2.sayName2 = () => {
    console.log('sayName2: my name is ()=>', this.name); //global
    // console.dir(this);
};

//simple function set this to class
person2.sayName3 = function () {
    console.log('sayName3: my name is', this.name); //class
    // console.dir(this);
};


console.log('---- inclass invokation ----')
person2.sayName();
person2.sayNameArrow();
person2.sayName2();
person2.sayName3();

console.log('----- set time out -----')

setTimeout(person2.sayName, 500);
setTimeout(person2.sayNameArrow, 600)
setTimeout(person2.sayName2, 700)
setTimeout(person2.sayName3, 800)

// arrow function 'this' is defined by the lexical/static scope (the location it was created);
// es5 function 'this' is defined by the invocation scope (dynamic/public scope);