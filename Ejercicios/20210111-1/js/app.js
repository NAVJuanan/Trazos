function calculateCurrency() {

    let nodeValue = document.querySelector("#currencyAmount");  // obtenemos el selector del input
    let currencyValue = nodeValue.value; // guardamos el valor del input

    let nodeDollar = document.querySelector("#dollarCurrency");  // obtenemos el selector del dólar
    nodeDollar.textContent = currencyValue * 1.1; // damos valor al selector del dólar

    let nodePound = document.querySelector("#poundCurrency");  // obtenemos el selector de la libra
    nodePound.textContent = currencyValue * 0.8; // damos valor al selector de la libra

    let nodeYen = document.querySelector("#yenCurrency");  // obtenemos el selector del yen
    //nodeYen.textContent = currencyValue * 1.5; // damos valor al selector del yen

    // damos valor al selector del yen usando el identificador como variable
    yenCurrency.textContent = currencyValue * 1.5;
}