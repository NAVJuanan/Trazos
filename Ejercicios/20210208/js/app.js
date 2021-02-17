// evento para obtener el valor del 'input' tras cada cambio
document.querySelector("#textInput").addEventListener("input", function () {

    const inputValue = this.value;

    // patrón para incluir 8 dígitos iniciales, un guión opcional y una letra mayúscula obligatoria
    const regexPattern = /^\d{9}-{0,1}[a-zA-Z]/g;

    // comprobamos si el dni introducido cumple el patrón
    if (regexPattern.test(inputValue)) {
        document.querySelector("#inputResult").innerHTML = "Es correcto";
    } else {
        document.querySelector("#inputResult").innerHTML = "Es incorrecto";
    }
})