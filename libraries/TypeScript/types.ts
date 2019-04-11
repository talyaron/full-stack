// let aString: string;
// let aNumber: number;
// let aBoolean: boolean;
// let anAny: any; 
// let x: number
// let y:any;
// y = 'abcd';
// y= 6;

// aString = '4';
// aNumber = 4;
// aBoolean = true;
// anAny = { e: 4 };

// for (let i=0;i<10;i++){
//     let xi:number;
//     xi = i;
//     console.log(xi)
// }



// console.log(aString, aNumber, anAny, aBoolean, y)

// let arrStrings: string[];
// let arrStrings2: Array<string>;

// arrStrings = ['a', 'b'];
// arrStrings2 = ['c', 'd'];
// console.log(arrStrings, arrStrings2)

// let arrTuple: [string, boolean, number];
// arrTuple = ['a', true,4];
// console.log(arrTuple)

function add(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
}

console.log(add(3, 5))

//Interface

//without interface
function substract(numbs: { first: number, second: number }): number {
    return numbs.first - numbs.second
}

let subObj = { first: 4, second: 2 };
console.log(substract(subObj));

//with interface
interface substractInt {
    first: number,
    second: number
}

function substract2(numbs: substractInt): number {
    return numbs.first - numbs.second
}

let sub2:substractInt = { first: 10, second: 20 }

console.log(substract2(sub2));



//classes

// class Workers {
//     name: string;
//     private wage: number;

//     constructor(name: string, wage: number) {
//         this.name = name;
//         this.wage = wage;
//     }

//     sayWage() {
//         console.log(`${this.name} earns ${this.wage}$ a year`)
//     }
// }
// let itizik = new Workers('itizik', 50000)

// itizik.sayWage();
// console.log(itizik.wage);
// console.log(itizik.name);


// class SoftwareEnginers extends Workers {
//     level: string;
//     constructor(name: string, wage: number, level: string) {
//         super(name, wage);
//         this.level = level;

//     }

//     sayLevel(): void {
//         console.log(`${this.name} has level "${this.level}" as software enginer`)
//     }
// }

// let moshe: Workers = new SoftwareEnginers('Moshe', 70000, 'Joniour');

// // moshe.sayLevel();
// // console.log(moshe.level)
// moshe.sayWage();