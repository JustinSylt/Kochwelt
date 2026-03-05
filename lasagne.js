

function calculatePortions() {
	let number_of_portions = document.getElementById("input").value;
	if (number_of_portions == "") {
		document.getElementById("input").value = 1
		document.getElementById("hackfleisch").innerHTML = 125 + " g"
		document.getElementById("zwiebeln").innerHTML = 0.25
		document.getElementById("knoblauchzehe").innerHTML = 0.5
		document.getElementById("petersilie").innerHTML = 0.25 + " Bund"
		document.getElementById("tomatenmark").innerHTML = 0.25 + " EL"
		document.getElementById("tomaten").innerHTML = 0.25 + " Dosen"
		document.getElementById("milch").innerHTML = 0.13 + " Liter"
		document.getElementById("butter").innerHTML = 7.5 + " g"
		document.getElementById("mehl").innerHTML = 10 + " g"
		document.getElementById("lasagneplatten").innerHTML = 75 + " g"
	}
	else {
		if (number_of_portions > 20 || number_of_portions < 1){
			document.getElementById("input").value = 1
			alert("Die Anzahl der Portionen darf nicht größer als 20, oder kleiner als 0 sein")
		} else{
		number_of_portions = parseInt(number_of_portions, 10);

		document.getElementById("hackfleisch").innerHTML = number_of_portions * 125 + " g"
		document.getElementById("zwiebeln").innerHTML = number_of_portions * 0.25
		document.getElementById("knoblauchzehe").innerHTML = number_of_portions * 0.5
		document.getElementById("petersilie").innerHTML = number_of_portions * 0.25 + " Bund"
		document.getElementById("tomatenmark").innerHTML = number_of_portions * 0.25 + " EL"
		document.getElementById("tomaten").innerHTML = number_of_portions * 0.25 + " Dosen"
		document.getElementById("milch").innerHTML = number_of_portions * 0.13 + " Liter"
		document.getElementById("butter").innerHTML = number_of_portions * 7.5 + " g"
		document.getElementById("mehl").innerHTML = number_of_portions * 10 + " g"
		document.getElementById("lasagneplatten").innerHTML = number_of_portions * 75 + " g"
		}
	}

}




