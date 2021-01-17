const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"]; // constante para el array semanal
let nodeTable = document.querySelector(".calendar__container"); // obtenemos el contenedor
let nodeHtml = ""; // variable para rellenar el html
let week = 1; // inicializamos el día de la semana

// bucle para recorrer los meses
for (let i = 1; i <= 12; i++) {
    let daysOfMonth = daysMonth(i); // calculamos los días que tiene el mes
    let nameOfMonth = nameMonth(i); // obtenemos el nombre del mes

    // imprimimos el mes
    nodeHtml += "<div class='month__container'><h2 class='month__title'>" + nameOfMonth + "</h2><table class='month__table'>";

    // imprimimos los días de la semana
    nodeHtml += "<thead><tr>";
    for (let j = 0; j < daysOfWeek.length; j++) {
        nodeHtml += "<th>" + daysOfWeek[j] + "</th>";
    }
    nodeHtml += "</tr></thead>";

    // bucle para recorrer los días del mes
    nodeHtml += "<tbody><tr>"
    for (let j = 1; j <= daysOfMonth; j++) {

        if (week === 1) {
            nodeHtml += "<tr>";
        }

        nodeHtml += "<td>" + j + "</td>";
        week++;

        if (week > daysOfWeek.length) {
            nodeHtml += "</tr>"
            week = 1;
        }
    }

    nodeHtml += "</tr></tbody></table></div>"; // cierre de etiquetas
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