"use strict";

/*** JQuery ***/
$(document).ready(() => {

    const urlData = $.ajax({
        method: "GET",
        url: "https://swapi.dev/api/people",
        success: function (data) {
            console.log("datos obtenidos correctamente");
            console.log(data);

            drawPeople(data);
        },
        error: function (error) {
            console.log("error al obtener datos");
            console.log(error);
        }
    })

    console.log(urlData);
})

function drawPeople(datos) {
    $("#numberPeople").html(datos.count);

    for (let i = 0; i < datos.results.length; i++) {
        console.log(datos.results[i].name);

        const nodePeople = $("<div></div>")
            .addClass("people")
            .html(datos.results[i].name);

        $("#gridPeople").append(nodePeople);
    }
}