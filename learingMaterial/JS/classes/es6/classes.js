class Pets {
    constructor(name, size, LifeExpectancy, costOfFoodPerYear) {
        this.name = name;
        this.size = size;
        this.LifeExpectancy = LifeExpectancy;
        this.costOfFoodPerYear = costOfFoodPerYear;
    }

    //methods

    callNameNSize() {
        console.log("The animel name is:", this.name, "and it is", this.size);
    }

    calculteCostOfFood() {
        return this.costOfFoodPerYear * this.LifeExpectancy
    }

    get costOfFood() {
        return this.calculteCostOfFood();
    }
}

let cat = new Pets('cat', 'small', 15, 200);
let dog = new Pets ('dog','medium', 12, 300);
cat.callNameNSize();
console.log(cat.costOfFood);
console.log(cat.calculteCostOfFood())