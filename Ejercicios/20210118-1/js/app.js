const arrayNumeros = [1, 4, 6, 3, 6, 2, 1, 12, 5, 7];
document.querySelector("#arrayList").textContent = arrayNumeros;

let posNumber = document.querySelector("#positionNumber");
let valueNumber = document.querySelector("#idNumber");
let biggerNumber = arrayNumeros[0];
let isBigTen = false;

for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > 10) {
        posNumber.textContent += " " + i;
        valueNumber.textContent += " " + arrayNumeros[i];
        isBigTen = true;
    }

    if (biggerNumber < arrayNumeros[i]) {
        biggerNumber = arrayNumeros[i]
    }
}

document.querySelector("#bigNumber").textContent = biggerNumber;

if (isBigTen) {
    document.querySelector("#bigTen").textContent = " SÍ";
} else {
    document.querySelector("#bigTen").textContent = " NO";
}