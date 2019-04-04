'use strict';

class Plant {

    constructor(name, age, description, species) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.species = species;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get age() {
        return this.age;
    }

    set age(value) {
        if (value <= 0) {
            throw new Error("Invalid value.Age should be more than 0");
        }
        this.age = value;
    }

    get description() {
        return this.description;
    }

    set description(value) {
        this.description = value;
    }

    get species() {
        return this.species;
    }

    set species(value) {
        this.species = value;
    }
}

class Fern extends Plant {

    constructor(inflorescenceSize) {
        super(name, age, description, species);

        this.inflorescenceSize = inflorescenceSize;
    }

    set inflorescenceSize(value) {
        if (value <= 0) {
            throw new Error("Invalid value.Inflorescence size should be more than 0");
        }
        this.inflorescenceSize = value;
    }

    get inflorescenceSize() {
        return this.inflorescenceSize;
    }

    get infoObject() {
        return {
            name: this.name,
            age: this.age,
            description: this.description,
            species: this.species,
            inflorescenceSize: this.inflorescenceSize
        };
    }
}

class Spruce extends Plant {
    constructor(name, age, description, species,habitat) {
        super(name, age, description, species);
        this.habitat = habitat;
    }

    get habitat() {
        return this.habitat;
    }

    set habitat(value) {
        this.habitat = value;
    }

    get infoObject() {
        return {
            name: this.name,
            age: this.age,
            description: this.description,
            species: this.species,
            habitat: this.habitat
        };
    }
}