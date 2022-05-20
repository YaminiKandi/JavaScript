function add() {
    var x = document.getElementById("val1").value;
    var y = document.getElementById("val2").value;
    z = Number(x) + Number(y);
    document.getElementById("res").innerHTML = z;
}
function substract() {
    var x = document.getElementById("val1").value;
    var y = document.getElementById("val2").value;
    z = Number(x) - Number(y);
    document.getElementById("res").innerHTML = z;
}
function multiply() {
    var x = document.getElementById("val1").value;
    var y = document.getElementById("val2").value;
    z = Number(x) * Number(y);
    document.getElementById("res").innerHTML = z;
}
function divide() {
    var x = document.getElementById("val1").value;
    var y = document.getElementById("val2").value;
    z = Number(x) / Number(y);
    document.getElementById("res").innerHTML = z;
}
function exponent() {
    var x = document.getElementById("val1").value;
    var y = document.getElementById("val2").value;
    z = Number(x) ** Number(y);
    document.getElementById("res").innerHTML = z;
}
function modulus() {
    var x = document.getElementById("val1").value;
    var y = document.getElementById("val2").value;
    z = Number(x) % Number(y);
    document.getElementById("res").innerHTML = z;
}