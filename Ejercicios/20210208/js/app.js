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
})