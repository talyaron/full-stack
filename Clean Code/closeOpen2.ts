class Vehicle {
    fuelCapacity:number;
    fuelEfficiency:number;
    electricRange:number;

    constructor(fuelCapacity:number, fuelEfficiency:number) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        let range = this.fuelCapacity * this.fuelEfficiency;

        if (this instanceof HybridVehicle) {
            range += this.electricRange;
        }
        return range;
    }
}

class HybridVehicle extends Vehicle {
    electricRange:number;
    
    constructor(fuelCapacity:number, fuelEfficiency:number, electricRange:number) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }
}

