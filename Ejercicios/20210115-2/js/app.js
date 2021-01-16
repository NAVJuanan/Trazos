let nodeTable = document.querySelector(".table-container"); // obtenemos el contenedor
let nodeHtml = ""; // variable para rellenar el html
const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"]; // array semanal
let week = 1; // inicializamos el día de la semana

// bucle para recorrer los meses
for (let i = 1; i <= 12; i++) {
    let daysOfMonth = daysMonth(i); // calculamos los días que tiene el mes
    let nameOfMonth = nameMonth(i); // obtenemos el nombre del mes

    // imprimimos el mes
    nodeHtml += "<table class='table-month'><tr><th colspan='7'>" + nameOfMonth + "</th></tr>";

    // imprimimos los días de la semana
    nodeHtml += "<tr>";
    for (let j = 0; j < daysOfWeek.length; j++) {
        nodeHtml += "<td>" + daysOfWeek[j] + "</td>";
    }
    nodeHtml += "</tr>";

    // bucle para recorrer los días del mes
    for (let j = 1; j <= daysOfMonth; j++) {
        nodeHtml += "<tr><td>" + j + "</td></tr>";
    }

    nodeHtml += "</table>";
}

nodeTable.innerHTML += nodeHtml; // devolvemos el resultado al contenedor html


// función que devuelve los días del mes
function daysMonth(month) {
    let days;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;

        case 2:
            days = 28;
            break;

        default:
            days = 0;
    }

    return days;
}


// función que devuelve el nombre del mes
function nameMonth(month) {
    let name;

    switch (month) {
        case 1:
            name = "Enero";
            break;

        case 2:
            name = "Febrero";
            break;

        case 3:
            name = "Marzo";
            break;

        case 4:
            name = "Abril";
            break;

        case 5:
            name = "Mayo";
            break;

        case 6:
            name = "Junio";
            break;

        case 7:
            name = "Julio";
            break;

        case 8:
            name = "Agosto";
            break;

        case 9:
            name = "Septiembre";
            break;

        case 10:
            name = "Octubre";
            break;

        case 11:
            name = "Noviembre";
            break;

        case 12:
            name = "Diciembre";
            break;

        default:
            days = "";
    }

    return name;
}