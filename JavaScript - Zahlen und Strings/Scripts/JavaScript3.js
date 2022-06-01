window.onload = function ()
{
    "use strict";
    document.getElementById("prüfen").onclick = isbnPrüfen;
    document.getElementById("isbn").onblur = isbnPrüfen;
};

function isbnPrüfen()
{
    "use strict";
    let isbn = document.getElementById("isbn").value;

    // Bindestriche entfernen
    isbn = isbn.replace(/-/g, "");

    let ergebnis = checkISBN(isbn) ? "ok!" : "nicht ok!";

    document.getElementById("ausgabe").innerHTML = ergebnis;
}

function checkISBN(isbn)
{
    "use strict";
    let summe = 0;

    let prüfziffer = '';

    for (let i = 0; i < isbn.length - 1; i++)
    {
        summe += parseInt(isbn[i]) * (i + 1);
    }

    prüfziffer = (summe % 11 < 10) ? (summe % 11).toString() : 'X';

    return isbn[9] === prüfziffer;
}