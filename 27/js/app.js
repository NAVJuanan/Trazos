"use strict";

/*** JQuery ***/
$(document).ready(() => {

    let listTextColor = [];

    // JSON.parse() -> convierte un string Json en un objeto
    // JSON.stringify() -> convierte un valor JavaScript en un string Json

    // Local Storage: guarda y recupera datos bajo una clave
    if (JSON.parse(localStorage.getItem("listTextColor"))) {
        listTextColor = JSON.parse(localStorage.getItem("listTextColor"));
    }
    $("body").css("background-color", localStorage.getItem("favoriteColor"));

    $("#btnChange").on({
        click: function () {

            const aTextColor = {
                texto: $("#pickText").val(),
                color: $("#pickColor").val()
            }

            listTextColor.push(aTextColor);

            // guardamos datos
            localStorage.setItem("favoriteColor", $("#pickColor").val());
            localStorage.setItem("listTextColor", JSON.stringify(listTextColor));

            // obtenemos datos
            $("body").css("background-color", localStorage.getItem("favoriteColor"));
        }
    })
})