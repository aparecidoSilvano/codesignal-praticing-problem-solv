var alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function newNumeralSystem(number) {
    var response = [];

    var nValue = alphabet.indexOf(number);

    for (var i = 0; i < nValue; i++) {
        for (var j = nValue; j >= i; j--) {
            if (i + j === nValue) {
                response.push(alphabet[i] + " + " + alphabet[j]);
            }
        }
    }

    if (nValue == 0) {
        response.push(alphabet[0] + " + " + alphabet[0]);
    }

    console.log(response);
    return response;
}