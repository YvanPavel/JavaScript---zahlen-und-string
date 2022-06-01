"use strict";
window.onload = function ()
{
    document.getElementById("berechnen").onclick = berechnungenStarten;
};

function berechnungenStarten()
{
    let zahl1 = parseInt(document.getElementById("zahl1").value, 10);
    let zahl2 = parseInt(document.getElementById("zahl2").value, 10);
    let algorithmus = "ggt";

    // Prüfen ob beide Eingaben Zahlen sind
    if (isNaN(zahl1) === false && isNaN(zahl2) === false)
    {
        algorithmus = document.querySelector("input:checked").value;

        let ergebnis = 0;

        switch (algorithmus)
        {
            case "ggt":
                ergebnis = ggt(zahl1, zahl2);
                break;
            case "kgv":
                ergebnis = kgv(zahl1, zahl2);
                break;
        }

        document.getElementById("ergebnis").value = ergebnis;
    }
    else
    {
        alert("Wir brauchen zwei Zahlen!");
    }
}

function ggt(zahl1, zahl2)
{
    let rest = 0;

    while (zahl2 !== 0)
    {
        rest = zahl1 % zahl2;
        zahl1 = zahl2;
        zahl2 = rest;
    }
    return zahl1;
}

function kgv(zahl1, zahl2)
{
    return zahl1 * zahl2 / ggt(zahl1, zahl2);
}