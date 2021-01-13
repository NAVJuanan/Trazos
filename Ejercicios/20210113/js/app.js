function calcSum() {
    const startingValue = document.querySelector("#sourceNumber").valueAsNumber; // obtenemos el número inicial
    const endingValue = document.querySelector("#destinyNumber").valueAsNumber; // obtenemos el número final

    const sumValue = sumOdd(startingValue, endingValue); // calcula suma de impares
    document.querySelector("#totalOdd").textContent = sumValue; // total
}

// función para calcular la suma de los impares
function sumOdd(startValue, endValue) {
    let oddValue = 0;

    for (let i = startValue; i <= endValue; i++) {

        // sumamos si es impar
        if (i % 2 !== 0) {
            oddValue += i;
            document.querySelector("#listOdd").innerHTML += "<li>Número " + i + "</li>"; // mostramos cada número en una lista
        }
    }

    return oddValue;
}