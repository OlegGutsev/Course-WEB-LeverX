function Plant(name, age, description, species) {
    var name = name;
    var age = age;
    var description = description;
    var species = species;   
}

Plant.prototype.setName = function (value) {
    this.name = value;
}
Plant.prototype.getName = function () {
    return this.name;
}

Plant.prototype.setAge = function (value) {
    if (value <= 0) {
        throw new Error("Invalid value.Age should be more than 0");
    }
    this.age = value;
}
Plant.prototype.getAge = function () {
    return this.age;
}

Plant.prototype.setDescription = function (value) {
    this.description = value;
}
Plant.prototype.getDescription = function () {
    return this.description;
}

Plant.prototype.setSpecies = function (value) {
    this.species = value;
}
Plant.prototype.getSpecies = function () {
    return this.species;
}

//Fern class
function Fern(inflorescenceSize) {
    var inflorescenceSize = inflorescenceSize;
}

Fern.prototype = Object.create(Plant.prototype);

Fern.prototype.setInflorescenceSize = function (value) {
    if (value <= 0) {
        throw new Error("Invalid value.Inflorescence size should be more than 0");
    }
    this.inflorescenceSize = value;
}

Fern.prototype.getInflorescenceSize = function () {
    return this.inflorescenceSize;
}

Fern.prototype.getObj = function () {
    return { 
                name: this.getName(),
                age: this.getAge(),
                description: this.getDescription(),
                species: this.getSpecies(),
                inflorescenceSize: this.getInflorescenceSize() 
           };
}

//Spruce class
function Spruce(habitat) {
    var habitat = habitat;
}

Spruce.prototype = Object.create(Plant.prototype);

Spruce.prototype.setHabitat = function (value) {
    this.habitat = value;
}

Spruce.prototype.getHabitat = function () {
    return this.habitat;
}

Spruce.prototype.getObj = function () {
    return { 
                name: this.getName(),
                age: this.getAge(),
                description: this.getDescription(),
                species: this.getSpecies(),
                habitat: this.getHabitat() 
           };
}
