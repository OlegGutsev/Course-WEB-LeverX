(function () {
	function toJSONString(form) {
		var elements = form.querySelectorAll("input, select, textarea");
		var obj;
		if (elements[0].value == "spruce") {
			obj = new Spruce();

		} else if (elements[0].value == "fern") {
			obj = new Fern();

		} else {
			throw new Error("ERROR!!");
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
					if (elements[0].value === 'fern')
						obj.setInflorescenceSize(element.value);
					break;
				case 'habitat':
					if (elements[0].value === 'spruce')
						obj.setHabitat(element.value);
					break;
			}
		}
		return JSON.stringify(obj.getObj());
	}

	document.addEventListener("DOMContentLoaded", function () {
		var element = document.getElementById("habitat");
		var lab = document.getElementById("labHab");
		element.style.display = 'none';
		lab.style.display = 'none';

		var form = document.getElementById("mainForm");
		var output = document.getElementById("output");
		var addButton = document.getElementById("add");
		var updButton = document.getElementById("upd");
		var delButton = document.getElementById("del");

		addButton.addEventListener('click', function (e) {
			e.preventDefault();
			var jsonData = toJSONString(form);
			console.log(jsonData);
			xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === 4) {
					alert(this.responseText);
					form.dispatchEvent(new Event('submit'));
					readData();
				}
			});

			xhr.open("POST", "http://195.50.2.67:2403/alehhutsau/");
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(jsonData);

		});

		updButton.addEventListener('click', function (e) {
			e.preventDefault();
			var jsonData = toJSONString(form);
			console.log(jsonData);
			xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === 4) {
					console.log(this.responseText);
					readData();
				}
			});
			xhr.open("PUT", "http://195.50.2.67:2403/alehhutsau/"+document.getElementById("id").value);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(jsonData);
		});

		delButton.addEventListener('click', function (e) {
			e.preventDefault();
			xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === 4) {
					console.log(this.responseText);
					readData();
				}
			});
			xhr.open("DELETE", "http://195.50.2.67:2403/alehhutsau/"+document.getElementById("id").value);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send();
		});

		readData();
	});

})();

function readData() {
	xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            result=JSON.parse(this.response);
            var resultTBody=document.createElement('tbody');
            result.map(function(nthCPU){
            resultTBody.appendChild(parseCPUToTableRow(nthCPU));
			});
			
            var table=document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody,document.getElementById('rTBody'));
            resultTBody.id='rTBody';
            console.log('success');
        }
	});
	
    xhr.open("GET", "http://195.50.2.67:2403/alehhutsau/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function myFunction() {
	var data = document.getElementById("typeClass").value;
	hideElement(data);
}

function parseCPUToTableRow(CPUs){
    var row=document.createElement('tr');
	var id=document.createElement('th');
	
    id.innerText=CPUs['id'];
	row.appendChild(id);
	
    var name=document.createElement('td');
    name.innerText=CPUs['name'];
	row.appendChild(name);
	
    var age=document.createElement('td');
    age.innerText=CPUs['age'];
	row.appendChild(age);
	
    var description=document.createElement('td');
    description.innerText=CPUs['description'];
	row.appendChild(description);
	
    var species =document.createElement('td');
    species.innerText=CPUs['species'];
	row.appendChild(species);

	var inflorescenceSize =document.createElement('td');
	var habitat =document.createElement('td');
	if(CPUs.hasOwnProperty("inflorescenceSize")){
		inflorescenceSize.innerText=CPUs['inflorescenceSize'];
		row.appendChild(inflorescenceSize);
		habitat.innerHTML = '-';
		row.appendChild(habitat);
	} else {
		inflorescenceSize.innerHTML = '-';
		row.appendChild(inflorescenceSize);
		habitat.innerText=CPUs['habitat'];
		row.appendChild(habitat);
	}
	
    return row;
}

function hideElement(type) {
	var element = document.getElementById("habitat");
	var lab = document.getElementById("labHab");
	var element1 = document.getElementById("inflorescenceSize");
	var lab1 = document.getElementById("labInf");
	if (type === "spruce") {
		element.style.display = 'inline';
		lab.style.display = 'inline';
		element1.style.display = 'none';
		lab1.style.display = 'none';
	} else {
		element1.style.display = 'inline';
		lab1.style.display = 'inline';
		element.style.display = 'none';
		lab.style.display = 'none';
	}

}