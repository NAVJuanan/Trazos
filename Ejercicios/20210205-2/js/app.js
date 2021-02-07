// evento para obtener el valor del 'input' tras cada cambio
document.querySelector("#textInput").addEventListener("input", function () {
    let nodeTextRead = document.querySelector("#textRead");

    nodeTextRead.value = this.value;
})