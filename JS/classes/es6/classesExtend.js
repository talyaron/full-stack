//classes can be inherting other classes through Extend

class Pets {
    constructor(species, size) {
        this.species = species;
        this.size = size;
    }

    tellSpecies() {
        console.log('The pet species is', this.species);
    }
}

class Dog extends Pets {
    constructor(name, species, size) {
        super(species, size);

        this.name = name;
    }

    tellDogName() {
        console.log('The dog name is', this.name)
    }
}

var puppy = new Dog('Puppy', "dogs", "medium");

puppy.tellDogName();
puppy.tellSpecies();
console.dir(puppy);
console.dir(Pets)