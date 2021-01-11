const PI = 3.14; // valor constante de Pi

// función para gestionar los cálculos y escribir los resultados
function calculateCircle() {

    let nodeRadius = document.querySelector("#circleRadius");
    let nodeDiameter = document.querySelector("#circleDiameter");
    let nodePerimeter = document.querySelector("#circlePerimeter");
    let nodeArea = document.querySelector("#circleArea");

    nodeDiameter.textContent = "Diámetro es igual a " + calculateCircleDiameter(nodeRadius.value);
    nodePerimeter.textContent = "Perímetro es igual a " + calculateCirclePerimeter(nodeRadius.value);
    nodeArea.textContent = "Área es igual a " + calculateCircleArea(nodeRadius.value);
}

// función para calcular el diámetro
function calculateCircleDiameter(value) {
    return 2 * value;
}

// función para calcular el perímetro
function calculateCirclePerimeter(value) {
    return 2 * PI * value;
}

// función para calcular el área
function calculateCircleArea(value) {
    return 2 * PI * value * value;
}