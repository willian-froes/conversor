//FIXME: validar de outra forma
function convert() {
    getValue();

    if (binVal == "" && octVal == "" && hexVal == "" && charVal == "") {
        decToBin();
        decToOct();
        decToHex();
        decToChar();
    } else {
        if (decVal == "" && octVal == "" && hexVal == "" && charVal == "") {
            binToBases();
        } else {    
            if (decVal == "" && binVal == "" && hexVal == "" && charVal == "") {
                octToBases();
            } else {
                if (decVal == "" && binVal == "" && octVal == "" && charVal == "") {
                    hexToBases();
                } else {
                    if (decVal == "" && binVal == "" && octVal == "" && hexVal == "") {
                        charToBases();
                    } else {
                        erase();
                    }
                }
            }
        }
    }
}
//FIXME: pesquisar funcao para apagar inputs
function erase() {
    document.getElementById("dec").value = "";
    document.getElementById("bin").value = "";
    document.getElementById("oct").value = "";
    document.getElementById("hex").value = "";
    document.getElementById("char").value = "";
}

//FIXME: gettar de outra forma
function getValue() {
    decVal = document.getElementById("dec").value;
    binVal = document.getElementById("bin").value;
    octVal = document.getElementById("oct").value;
    hexVal = document.getElementById("hex").value;
    charVal = document.getElementById("char").value;
}

//FIXME: validar entradas, detectar key enter (possibilidade para remover "converter")