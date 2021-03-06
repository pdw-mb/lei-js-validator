// credits to: http://stackoverflow.com/users/277174/gilead
function modulo(divident, divisor) {
    var cDivident = '';
    var cRest = '';

    for (var i in divident) {
        var cChar = divident[i];
        var cOperator = cRest + '' + cDivident + '' + cChar;

        if (cOperator < parseInt(divisor)) {
                cDivident += '' + cChar;
        } else {
            cRest = cOperator % divisor;
            if (cRest == 0) {
                cRest = '';
            }
            cDivident = '';
        }
    }
    
    cRest += '' + cDivident;

    if (cRest == '') {
        cRest = 0;
    }

    return cRest;
}

// checks if input LEI is valid, returns 1 if yes
function validateLEI(leiCode) {
    var code = leiCode.toString();

    if (code.length != 20)
        return false;

    code = code.toUpperCase();

    var computedCode = '';

    for (var i = 0; i < 20; i++) {
        var acode = code.charCodeAt(i);
        if ((acode >= 65) && (acode <= 90)) {
            acode -= 55;
            computedCode += acode;
        } else if ((acode >= 48) && (acode <= 57)) {
            acode -= 48;
            computedCode += acode;
        } else {
            return false;
        }
    }

    return modulo(computedCode, 97) == 1; 
}
