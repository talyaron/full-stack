const moshe = {
    name: 'Moshe',
    age: 120,
    yearOfBirth: -3500,
    sayName: () => {
        console.log(this)
        console.log('this is my name:', this.name)
    },
    calculateYearOfBirth: () => {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}

console.log(moshe.name)
console.log(moshe['name'])
console.log(moshe)
moshe.sayName();
const yearOfBirth = moshe.calculateYearOfBirth();
console.log(yearOfBirth)

const team = {
    students: [
        moshe,
        { name: "Ahron", age: 123 },
        {
            name: 'Rivka',
            age: 80,
            friends:[
                'rina',
                'zila',
                'ditza'
            ]
        }
    ]
}

console.log(team)

console.log(team['students'][2]['friends'][2]);
console.log(team.students[2].friends[2]);

console.log(window)




