function onCreate() {
	var newdata;
	if ($('#typeClass').val() === "fern") {
		newdata = ({
			name: $('#name').val(),
			age: $('#age').val(), 	
			description: $('#description').val(),
			species: $('#species').val(),
			inflorescenceSize: $('#inflorescenceSize').val(),
			habitat: "-"
		});
	} else {
		newdata = ({
			name: $('#name').val(),
			age: $('#age').val(),
			description: $('#description').val(),
			species: $('#species').val(),
			inflorescenceSize: "-",
			habitat: $('#habitat').val(),
		});
	}

	$.ajax({
        url: "http://195.50.2.67:2403/alehhutsau/",
        type: 'POST',
        datatype: 'json',
        data: newdata,
        success: function (result) {
			alert("Create was successful");
			readData();
        },
        error: function () {
            alert("Error of creating");
        }
    });

}

function onUpdate(id) {
	if ($('#typeClass').val() === "fern") {
		newdata = ({
			name: $('#name').val(),
			age: $('#age').val(), 	
			description: $('#description').val(),
			species: $('#species').val(),
			inflorescenceSize: $('#inflorescenceSize').val(),
			habitat: "-"
		});
	} else {
		newdata = ({
			name: $('#name').val(),
			age: $('#age').val(),
			description: $('#description').val(),
			species: $('#species').val(),
			inflorescenceSize: "-",
			habitat: $('#habitat').val(),
		});
	}
    let promise = new Promise((resolve, reject) => {
        $.ajax({
            url: "http://195.50.2.67:2403/alehhutsau/" + id,
            type: 'PUT',
            datatype: 'json',
            data: newdata,
            success: function () {               
				resolve("success");
				readData();
            },
            error: function () {
                reject("error");
            }
        });
    })
    promise.then(
        success => {
            alert("Fulfilled: " + success);
        },
        error => {
            alert("Rejected: " + error);
        }
    )
}

function onDelete(id) {
  
    $.ajax({
        url: "http://195.50.2.67:2403/alehhutsau/" + id,
        type: 'DELETE',
        datatype: 'json',
        success: function () {
			alert("Delete was successful");
			readData();
        },
        error: function () {
            alert("Error of deleting");
        }
    });
}

function  readData() {
    $.ajax({
        url: "http://195.50.2.67:2403/alehhutsau/",
        type: 'GET',
        datatype: 'json',
        success: function (response) {
			$('#rTBody tr').remove();
            for (i=0; i<response.length; i++) {
                $('#plant > tbody:last-child').append('<tr><td>' + response[i].id     + '</td>' +
                                                          '<td>' + response[i].name   + '</td>' +
                                                          '<td>' + response[i].age    + '</td>' +
                                                          '<td>' + response[i].description   + '</td>' +
                                                          '<td>' + response[i].species   + '</td>' +
                                                          '<td>' + response[i].inflorescenceSize + '</td>' +
                                                          '<td>' + response[i].habitat + '</td></tr>');
            }
        },
        error: function () {
            alert("Error of reading");
        }
    });
}


$(function(){

	$(document).ready(function(){
		myFunction()
		readData();
	});

    $('#add').click( function(ev) {
        ev.preventDefault();
        onCreate(); 
	});
	
	$('#upd').click( function(ev) {
        ev.preventDefault();
        onUpdate($('#id').val()); 
	});
	
	$('#del').click( function(ev) {
        ev.preventDefault();
        onDelete($('#id').val()); 
    });
});



function myFunction() {
	var data = $("#typeClass").val();
	hideElement(data);
}

function hideElement(type) {
	var element = $("#habitat");
	var lab = $("#labHab");
	var element1 = $("#inflorescenceSize");
	var lab1 = $("#labInf");
	if (type === "spruce") {
		element.show();
		lab.show();
		element1.hide();
		lab1.hide();
	} else {
		element.hide();
		lab.hide();
		element1.show();
		lab1.show();
	} 
}
