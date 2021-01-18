const arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const valueDni = Number(prompt("Introduce tu dni sin la letra"));
if (valueDni < 0 || valueDni > 99999999) {
    alert("Error al introducir el dni");
} else {
    const valueLetra = String(prompt("Introduce la letra de tu dni"));
    const valueLetraCalc = arrayLetras[calculaLetraDNI(valueDni)];

    if (valueLetra.toUpperCase() === valueLetraCalc) {
        document.querySelector("#letra").textContent = "La letra introducida del dni " + valueDni + " es correcta: " + valueLetraCalc;
    } else {
        document.querySelector("#letra").textContent = "La letra introducida del dni " + valueDni + " no es correcta: " + valueLetra.toUpperCase() + ". La letra correcta es " + valueLetraCalc;
    }
}

function calculaLetraDNI(value) {
    const divisor = 23;

    return value % divisor;
}