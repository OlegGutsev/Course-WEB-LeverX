function Plant(name, age, description, species) {
    var name = name;
    var age = age;
    var description = description;
    var species = species;


    this.setName = function (value) {
        name = value;
    }
    this.getName = function () {
        return name;
    }

    this.setAge = function (value) {
        if (value <= 0) {
            throw new Error("Invalid value.Age should be more than 0");
        }
        age = value;
    }
    this.getAge = function () {
        return age;
    }

    this.setDescription = function (value) {
        description = value;
    }
    this.getDescription = function () {
        return description;
    }

    this.setSpecies = function (value) {
        species = value;
    }
    this.getSpecies = function () {
        return species;
    }

    
}

function Fern(name, age, description, species, inflorescenceSize) {
    Plant.apply(this, [name, age, description, species]);

    var inflorescenceSize = inflorescenceSize;

    this.setInflorescenceSize = function (value) {
        if (value <= 0) {
            throw new Error("Invalid value.Inflorescence size should be more than 0");
        }
        inflorescenceSize = value;
    }

    this.getInflorescenceSize = function () {
        return inflorescenceSize;
    }

    this.getObj = function () {
        return { 
                    name: this.getName(),
                    age: this.getAge(),
                    description: this.getDescription(),
                    species: this.getSpecies(),
                    inflorescenceSize: this.getInflorescenceSize() 
               };
    }
}

function Spruce(name, age, description, species, habitat) {
    Plant.apply(this, [name, age, description, species]);
    var habitat = habitat;
    this.setHabitat = function (value) {
        habitat = value;
    }

    this.getHabitat = function () {
        return habitat;
    }
    
    this.getObj = function () {
        return { 
                    name: this.getName(),
                    age: this.getAge(),
                    description: this.getDescription(),
                    species: this.getSpecies(),
                    habitat: this.getHabitat() 
               };
    }
}

(function () {
	function toJSONString(form) {
		var elements = form.querySelectorAll("input, select, textarea");
		var obj;
		if( elements[0].value == "spruce" ){
			obj = new Spruce();
		}else if( elements[0].value == "fern" ){
			obj = new Fern();
		} else {
			return "";
		}

		for (var i = 1; i < elements.length; i++) {
			var element = elements[i];
			switch (element.name) {
				case 'name':
					obj.setName(element.value);
					break;
				case 'age':
					obj.setAge(element.value);
					break;
				case 'description':
					obj.setDescription(element.value);
					break;
				case 'species':
					obj.setSpecies(element.value);
					break;
                case 'inflorescenceSize':
                    if(elements[0].value === 'fern')
					    obj.setInflorescenceSize(element.value);
					break;
                case 'habitat':
                    if(elements[0].value === 'spruce')
					    obj.setHabitat(element.value);
					break;
			}
		}
		return JSON.stringify(obj.getObj());
	}

	document.addEventListener("DOMContentLoaded", function () {
		var form = document.getElementById("mainForm");
		var output = document.getElementById("output");
		var addButton = document.getElementById("add");

		addButton.addEventListener('click', function (e) {
			e.preventDefault();
			var json = toJSONString(form);
			output.innerHTML = json;

		}, false);

	});

})();

var fern = new Fern('Fern1', 2,'Top Fern', 'asdad', 25);
var spruce = new Spruce('Spruce', 3, 'middle spruce', '-', 'Forest');

