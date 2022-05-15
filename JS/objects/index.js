var _this = this;
var moshe = {
    name: 'Moshe',
    age: 120,
    yearOfBirth: -3500,
    sayName: function () {
        console.log(_this);
        console.log('this is my name:', _this.name);
    },
    calculateYearOfBirth: function () {
        var currentYear = new Date().getFullYear();
        return currentYear - _this.age;
    }
};
console.log(moshe.name);
console.log(moshe['name']);
console.log(moshe);
moshe.sayName();
var yearOfBirth = moshe.calculateYearOfBirth();
console.log(yearOfBirth);
var team = {
    students: [
        moshe,
        { name: "Ahron", age: 123 },
        {
            name: 'Rivka',
            age: 80,
            friends: [
                'rina',
                'zila',
                'ditza'
            ]
        }
    ]
};
console.log(team);
console.log(team['students'][2]['friends'][2]);
console.log(team.students[2].friends[2]);
console.log(window);
