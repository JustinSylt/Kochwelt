function calculatePortion() {
    // Über onclick-Event bei HTML-Button für den Inputwert.
    let number_of_portions = document.getElementById("input").value;

    //Min und Max Inputwert für die Portionen.
    let max_value = 20;

    let min_value = 1;

    if (number_of_portions == '') {
        document.getElementById("input").value = 1;
        document.getElementById("makkaroni").innerHTML = 500;
        document.getElementById("parmesan").innerHTML = 250;
        document.getElementById("cheddar").innerHTML = 250;
        document.getElementById("sahne").innerHTML = 100;
    } else {
        if (number_of_portions > max_value || number_of_portions < min_value) {
            document.getElementById("input").value = 1;
            alert(
                'Die Anzahl der Portionen darf nicht größer als ' +
          max_value +
          ' sein und nicht kleiner als ' +
          min_value +
          ' sein',
            );
        } else {
    // Umwandeln des Strings in eine Zahl.
    number_of_portions = parseInt(number_of_portions, 10);
     
    //Für die Veräanderung im HTML_Dokument, um die Zutatenmengen zu verändern.
     document.getElementById("makkaroni").innerHTML = number_of_portions * 500;
     document.getElementById("parmesan").innerHTML = number_of_portions * 250;
     document.getElementById("cheddar").innerHTML = number_of_portions * 250;
     document.getElementById("sahne").innerHTML = number_of_portions * 100;
    }
    }
}
