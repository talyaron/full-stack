//based on Duncan McArdle's paper: https://duncan-mcardle.medium.com/solid-principle-2-open-closed-javascript-fc49b577a377

class Vehicle {
    fuelCapacity:number;
    fuelEfficiency:number;

    constructor(fuelCapacity:number, fuelEfficiency:number) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}


