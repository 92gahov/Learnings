window.onload = showContain();
function showContain() {
    if (document.querySelector(".contain").style.height === "0px") {
        document.querySelector(".contain").style.height = "500px";
    } else {
        document.querySelector(".contain").style.height = "0px";
    }
}

document.getElementById("eur").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var eur = 1.949;
    var result = current_currency / eur;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "EUR";
})
document.getElementById("usd").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var usd = 1.682;
    var result = current_currency / usd;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "USD";
})
document.getElementById("gbp").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var gbp = 2.296;
    var result = current_currency / gbp;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "GBP";
})
document.getElementById("chf").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var chf = 1.814;
    var result = current_currency / chf;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "CHF";
})
document.getElementById("try").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var tryy = 0.111;
    var result = current_currency / tryy;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "TRY";
})
document.getElementById("sek").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var sek = 0.186;
    var result = current_currency / sek;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "SEK";
})
document.getElementById("nok").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var nok = 0.191;
    var result = current_currency / nok;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "NOK";
})
document.getElementById("dkk").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var dkk = 0.257;
    var result = current_currency / dkk;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "DKK";
})
document.getElementById("ron").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var ron = 0.385;
    var result = current_currency / ron;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "RON";
})
document.getElementById("pln").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var pln = 0.420;
    var result = current_currency / pln;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "PLN";
})
document.getElementById("cnh").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var cnh = 0.263;
    var result = current_currency / cnh;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "CNH";
})
document.getElementById("cad").addEventListener("click", () => {
    var current_currency = document.getElementById("current").value;
    var cad = 1.337;
    var result = current_currency / cad;
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + "CAD";
})