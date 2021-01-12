function calculateNumber() {
    const numberValue = document.querySelector("#inputNumber").value;

    // par
    if (isEven(numberValue)) {
        document.querySelector("#even").textContent = "SÍ";
    } else {
        document.querySelector("#even").textContent = "NO";
    }

    // múltiplo de 3
    if (isMultipleThree(numberValue)) {
        document.querySelector("#multipleThree").textContent = "SÍ";
    } else {
        document.querySelector("#multipleThree").textContent = "NO";
    }

    // múltiplo de 7
    if (isMultipleSeven(numberValue)) {
        document.querySelector("#multipleSeven").textContent = "SÍ";
    } else {
        document.querySelector("#multipleSeven").textContent = "NO";
    }
}

// función para comprobar si es par o no
function isEven(numValue) {

    if (numValue % 2 === 0) {
        return true;
    }

    return false;
}

// función para comprobar si es múltiplo de 3
function isMultipleThree(numValue) {

    if (numValue % 3 === 0) {
        return true;
    }

    return false;
}

// función para comprobar si es múltiplo de 7
function isMultipleSeven(numValue) {

    if (numValue % 7 === 0) {
        return true;
    }

    return false;
}