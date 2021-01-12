function calculatePrice() {
    const limitPrice = 50; // precio base para gastos de envío
    let expenseValue = 0, totalValue = 0;

    const priceValue = Number(document.querySelector("#inputPrice").value); // obtenemos el precio base

    const taxValue = calcTax(priceValue); // calcula impuestos

    // calcula gastos de envío
    if (priceValue < limitPrice) {
        expenseValue = 10;
    }

    totalValue = priceValue + taxValue + expenseValue; // calculta totales

    document.querySelector("#basePrice").textContent = priceValue; // precio base
    document.querySelector("#taxPrice").textContent = taxValue; // impuestos
    document.querySelector("#expensePrice").textContent = expenseValue; // gastos de envío
    document.querySelector("#totalPrice").textContent = totalValue; // total
}

// función para calcular el impuesto
function calcTax(numValue) {

    if (numValue !== 0) {
        return numValue * 0.21;
    }

    return 0;
}