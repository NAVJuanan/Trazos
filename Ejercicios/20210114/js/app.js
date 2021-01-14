let nodeTable = document.querySelector(".table-container"); // obtenemos el contenedor
let nodeText; // variable para rellenar con el html ya que usar innerHMTL directamente cierra nodos automáticamente
let total = 0;

// bucle para cada tabla
for (let i = 1; i <= 10; i++) {
    nodeText = "";
    nodeText += "<ul class='table-multiply'><h2>Tabla del " + i + "</h2>";

    // bucle para cada multiplicación
    for (let j = 0; j <= 9; j++) {
        total = i * j;
        nodeText += "<li>" + i + " * " + j + " = " + total + "</li>";
    }

    nodeText += "</ul>";
    nodeTable.innerHTML += nodeText;
}
