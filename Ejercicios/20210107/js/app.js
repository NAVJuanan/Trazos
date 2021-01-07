const primerNumero = Number(prompt("Introduzca un número"));
const segundoNumero = Number(prompt("Introduzca otro número"));

if (primerNumero > segundoNumero) {
    document.querySelector("body").innerHTML = "El primer número (" + primerNumero + ") es MAYOR que el segundo número (" + segundoNumero + ")";
} else if (primerNumero < segundoNumero) {
    document.querySelector("body").innerHTML = "El primer número (" + primerNumero + ") es MENOR que el segundo número (" + segundoNumero + ")";
} else {
    document.querySelector("body").innerHTML = "El primer número (" + primerNumero + ") es IGUAL que el segundo número (" + segundoNumero + ")";
}