"use strict";

/*** JQuery ***/
$(document).ready(() => {

    const listTextColor = [];

    // Local Storage: guarda y recupera datos bajo una clave
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