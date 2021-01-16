function calculate() {
    const valueNegOne = -1;
    const valueTwo = 2;
    const valueFour = 4;

    // obtenemos los valores introducidos
    const valueA = Number(document.querySelector("#numberA").value);
    const valueB = Number(document.querySelector("#numberB").value);
    const valueC = Number(document.querySelector("#numberC").value);
    debugger;
    // si el cálculo es negativo -> devolvemos mensaje
    const firstCalculation = (valueB ** valueTwo) - (valueFour * valueA * valueC);
    if (firstCalculation < 0) {
        document.querySelector("#numberX").textContent = "No hay soluciones reales";
        return -1;
    }

    // si el cálculo es positivo -> calculamos los 2 posibles resultados
    const secondCalculation = Math.sqrt(firstCalculation);

    const positiveTotal = ((valueNegOne * valueB) + secondCalculation) / (valueTwo * valueA);
    const negativeTotal = ((valueNegOne * valueB) - secondCalculation) / (valueTwo * valueA);

    document.querySelector("#numberX").textContent = positiveTotal + " y " + negativeTotal;

    return 0;
}