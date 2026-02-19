function calculatePortion() {
    // Über onclick-Event bei HTML-Button für den Inputwert.
    let number_of_portions = document.getElementById("input").value;
    console.log(number_of_portions);
    // Umwandeln des Strings in eine Zahl.
    number_of_portions = parseInt(number_of_portions, 10);
     
    //Für die Veräanderung im HTML_Dokument, um die Zutatenmengen zu verändern.
     document.getElementById("makkaroni").innerHTML = number_of_portions * 500;
     document.getElementById("parmesan").innerHTML = number_of_portions * 250;
     document.getElementById("cheddar").innerHTML = number_of_portions * 250;
     document.getElementById("sahne").innerHTML = number_of_portions * 100;
    }