"use strict";

/*** JQuery ***/
$(document).ready(function () {

    // oculto al iniciar
    $(".menu-container").hide();

    // acciones sobre el botón de abrir
    $("#btnOpen").on({
        mouseenter: function () {
            $(this).addClass("open-button--hover");
        },
        mouseleave: function () {
            $(this).removeClass("open-button--hover");
        },
        click: function () {
            $(this).hide();
            $(".menu-container").slideDown();
        }
    });

    // acciones sobre el botón de cerrar
    $("#btnClose").on({
        mouseenter: function () {
            $(this).addClass("close-button--hover");
        },
        mouseleave: function () {
            $(this).removeClass("close-button--hover");
        },
        click: function () {
            $(".menu-container").hide();
            $("#btnOpen").show();
        }
    });
});