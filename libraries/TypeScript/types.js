var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var aString;
var aNumber;
var aBoolean;
var anAny;
aString = '4';
aNumber = 4;
aBoolean = true;
anAny = { e: 4 };
console.log(aString, aNumber, anAny, aBoolean);
var arrStrings;
var arrStrings2;
arrStrings = ['a', 'b'];
arrStrings2 = ['a', 'b'];
console.dir(arrStrings, arrStrings2);
var arrTuple;
arrTuple = ['a', true];
console.log(arrTuple);
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(add(3, 5));
//Interface
//without interface
function substract(numbs) {
    return numbs.first - numbs.second;
}
var subObj = { first: 4, second: 2 };
console.log(substract(subObj));
function substract2(numbs) {
    return numbs.first - numbs.second;
}
var sub2 = { first: 10, second: 20 };
console.log(substract2(sub2));
//classes
var Workers = /** @class */ (function () {
    function Workers(name, wage) {
        this.name = name;
        this.wage = wage;
    }
    Workers.prototype.sayWage = function () {
        console.log(this.name + " earns " + this.wage + "$ a year");
    };
    return Workers;
}());
var itizik = new Workers('itizik', 50000);
itizik.sayWage();
// console.log(itizik.wage);
console.log(itizik.name);
var SoftwareEnginers = /** @class */ (function (_super) {
    __extends(SoftwareEnginers, _super);
    function SoftwareEnginers(name, wage, level) {
        var _this = _super.call(this, name, wage) || this;
        _this.level = level;
        return _this;
    }
    SoftwareEnginers.prototype.sayLevel = function () {
        console.log(this.name + " has level \"" + this.level + "\" as software enginer");
    };
    return SoftwareEnginers;
}(Workers));
var moshe = new SoftwareEnginers('Moshe', 70000, 'Joniour');
// moshe.sayLevel();
// console.log(moshe.level)
moshe.sayWage();
