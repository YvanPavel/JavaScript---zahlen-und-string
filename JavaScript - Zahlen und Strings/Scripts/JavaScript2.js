window.onload = function ()
{
    "use strict";
    // Textfeld Event
    document.getElementById("zahl").oninput = umwandeln;

    // Alle Radiobuttons suchen
    let radios = document.querySelectorAll("input[type=radio]");

    radios.forEach(radio => radio.onchange = umwandeln);   
};

function umwandeln()
{
    "use strict";
    // Wert der Textbox als Dezimalwert in die Variable einlesen
    let dezimalWert = parseInt(document.getElementById("zahl").value, 10);

    // Ist die Eingabe eine Zahl?
    if (isNaN(dezimalWert) === false)
    {
        // Die gewählte Basis auslesen (ist 2, 8 oder 16)
        let basis = document.querySelector("input:checked").value;

        // Umwandeln
        let ergebnis = decimalToAny(dezimalWert, basis);

        // Ausgabe
        document.getElementById("ausgabe").value = ergebnis;
    }
}

function decimalToAny(dezimalWert, basis)
{
    "use strict";
    // Dezimalwert mit der gewählten Basis umwandeln
    // Das toUpperCase für die Hex-Darstellung
    return parseInt(dezimalWert).toString(basis).toUpperCase();
}