// evento para obtener el valor del 'input' tras cada cambio
document.querySelector("#textInput").addEventListener("input", function () {

    const spaceChar = " ";
    const hyphenChar = "-";
    const emptyChar = "";
    const regex = /[^a-z]/gi;

    // transformamos texto a minúsculas
    const inputValue = this.value.toLowerCase();
    console.log(inputValue, inputValue.length);

    const regexValue = inputValue.replaceAll(regex, spaceChar);
    console.log(regexValue);

    // creamos array por cada palabra separando por espacios
    const inputArray = regexValue.split(spaceChar);
    console.log(inputArray);

    // filtramos array para descartar espacios vacíos extras tras sustituir caracteres raros
    const filteredArray = inputArray.filter(value => value !== emptyChar);
    console.log(filteredArray);

    // creamos texto a partir de array filtrado separando por guiones
    const readValue = filteredArray.join(hyphenChar);
    console.log(readValue);


    // número de caracteres
    let nodeInputChars = document.querySelector("#inputChars");
    nodeInputChars.innerHTML = `${inputValue.length} caracteres`;

    // número de palabras
    let nodeInputWords = document.querySelector("#inputWords");
    nodeInputWords.innerHTML = `${filteredArray.length} palabras`;

    // texto transformado a slug
    let nodeTextRead = document.querySelector("#textRead");
    nodeTextRead.value = readValue;
})