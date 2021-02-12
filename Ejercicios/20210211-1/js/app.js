"use strict";

/*** JQuery ***/
$(document).ready(function () {

    // acciones sobre el botón
    $("#btnOpen").on({
        mouseenter: function () {
            $(this).addClass("main-button--hover");
        },
        mouseleave: function () {
            $(this).removeClass("main-button--hover");
        },
        click: function () {
            alert("Hola")
        }
    });

});