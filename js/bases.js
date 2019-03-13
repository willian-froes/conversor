//FIXME: verificar possibilidade para rgb, cor e cmyk
function decToBin() {
    var decimal = parseInt(document.getElementById("dec").value).toString(2);
    document.getElementById("bin").value = decimal;
}    

function decToOct() {
    var octal = parseInt(document.getElementById("dec").value).toString(8);
    document.getElementById("oct").value = octal;
}

function decToHex() {
    var hexadecimal = parseInt(document.getElementById("dec").value).toString(16);
    document.getElementById("hex").value = hexadecimal.toUpperCase();
}

function decToChar() {
    var caracter = String.fromCharCode(parseInt(document.getElementById("dec").value));
    document.getElementById("char").value = caracter;
}

function binToBases() {
    var binario = parseInt(document.getElementById("bin").value, 2);
    document.getElementById("dec").value = binario;
    decToOct();
    decToHex();
    decToChar();
}

function octToBases() {
    var octal = parseInt(document.getElementById("oct").value, 8);
    document.getElementById("dec").value = octal;
    decToBin();
    decToHex();
    decToChar();
}

function hexToBases() {
    var hexadecimal = parseInt(document.getElementById("hex").value, 16);
    document.getElementById("dec").value = hexadecimal;
    decToBin();
    decToOct();
    decToChar();
}

function charToBases() {
    var caracter = document.getElementById("char").value.charCodeAt(0);
    document.getElementById("dec").value = caracter;
    decToBin();
    decToOct();
    decToHex();
}