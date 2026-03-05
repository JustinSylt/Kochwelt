function getinputvalue() {
    let anzahl_portionen = document.getElementById('anzahl-gulasch').value;

    // Basis-Werte für 1 Portion
    let butterschmalz_count = 0.5;
    let zwiebel_count = 1;
    let tomatenmark_count = 0.5;
    let karotte_count = 1;
    let sellerie_count = 10;
    let rotwein_count = 0.25;
    let rindfleisch_count = 200;
    let rinderbruehe_count = 50;
    let paprikasues_count = 0.2;
    let paprikascharf_count = 0.2;
    let lorbeer_count = 0.5;

    let max_value = 20;
    let min_value = 1;

    if (anzahl_portionen == '') {
        document.getElementById('anzahl-gulasch').value = 1;
    } else if (anzahl_portionen > max_value || anzahl_portionen < min_value) {
        document.getElementById('anzahl-gulasch').value = 1;
        alert('Bitte eine Zahl zwischen 1 und 20 eingeben.');
    } else {
        anzahl_portionen = parseFloat(anzahl_portionen);

        // Berechnung + Rundung auf 2 Stellen + Komma statt Punkt
        updateAmount('butterschmalz-count', anzahl_portionen * butterschmalz_count);
        updateAmount('zwiebel-count', anzahl_portionen * zwiebel_count);
        updateAmount('tomatenmark-count', anzahl_portionen * tomatenmark_count);
        updateAmount('karotte-count', anzahl_portionen * karotte_count);
        updateAmount('sellerie-count', anzahl_portionen * sellerie_count);
        updateAmount('rotwein-count', anzahl_portionen * rotwein_count);
        updateAmount('rindfleisch-count', anzahl_portionen * rindfleisch_count);
        updateAmount('rinderbruehe-count', anzahl_portionen * rinderbruehe_count);
        updateAmount('paprikasues-count', anzahl_portionen * paprikasues_count);
        updateAmount('paprikascharf-count', anzahl_portionen * paprikascharf_count);
        updateAmount('lorbeer-count', anzahl_portionen * lorbeer_count);
    }
}

// Hilfsfunktion, um den Code oben kürzer zu halten
function updateAmount(id, value) {
    // toFixed(2) macht max 2 Nachkommastellen
    // replace('.', ',') macht aus dem Punkt ein deutsches Komma
    document.getElementById(id).innerHTML = value.toFixed(2).replace('.', ',');
}