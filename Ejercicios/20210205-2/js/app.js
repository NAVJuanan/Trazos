// evento para obtener el valor del 'input' tras cada cambio
document.querySelector("#textInput").addEventListener("input", function () {

    const spaceChar = " ";
    const hyphenChar = "-";
    const emptyChar = "";

    // patrón para excluir letras que no vayan de la 'a' a la 'z' y espacio
    const regexPattern = /[^a-z ]/g;

    // recogemos y transformamos texto a minúsculas
    const inputValue = this.value.toLowerCase();

    // aplicamos el patrón y sustituimos por una cadena vacía
    const regexValue = inputValue.replace(regexPattern, emptyChar);

    // creamos array por cada palabra separando por espacios
    const inputArray = regexValue.split(spaceChar);

    // filtramos array para descartar cadenas vacías
    const filteredArray = inputArray.filter(value => value !== emptyChar);

    // creamos cadena de texto a partir de array filtrado separando por guiones
    const readValue = filteredArray.join(hyphenChar);


    // número de caracteres
    let nodeInputChars = document.querySelector("#inputChars");
    nodeInputChars.innerHTML = `${inputValue.length} caracteres`;

    // número de palabras
    let nodeInputWords = document.querySelector("#inputWords");
    nodeInputWords.innerHTML = `${filteredArray.length} palabras`;

    // texto transformado a slug
    let nodeTextRead = document.querySelector("#textRead");
    nodeTextRead.value = readValue;
});

// evento para obtener el valor del 'area' tras cada cambio
document.querySelector("#textLong").addEventListener("input", function () {
    const spaceChar = " ";
    const emptyChar = "";

    const inputValue = this.value;

    const inputArray = inputValue.split(spaceChar);
    const filteredArray = inputArray.filter(value => value !== emptyChar);

    let nodeAreaChars = document.querySelector("#areaChars");
    nodeAreaChars.innerHTML = `${inputValue.length} caracteres`;

    let nodeAreaWords = document.querySelector("#areaWords");
    nodeAreaWords.innerHTML = `${filteredArray.length} palabras`;
});

// evento para convertir a mayúsculas el valor del 'area'
document.querySelector("#btnUpper").addEventListener("click", function () {
    let nodeArea = document.querySelector("#textLong");
    nodeArea.value = nodeArea.value.toUpperCase();
});

// evento para convertir a minúsculas el valor del 'area'
document.querySelector("#btnLower").addEventListener("click", function () {
    let nodeArea = document.querySelector("#textLong");
    nodeArea.value = nodeArea.value.toLowerCase();
});