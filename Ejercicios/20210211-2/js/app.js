"use strict";

/*** JQuery ***/
$(document).ready(function () {

    // mostrar el primero al cargar
    let nodeImages = $(".slider__img");
    nodeImages.addClass("slider__img--hide");
    nodeImages.first().removeClass("slider__img--hide");

    // click flecha izquierda
    $(".arrow__left").on({
        click: function () {
            console.log("izquierda")
        }
    });

    // click flecha derecha
    $(".arrow__right").on({
        click: function () {
            console.log("derecha")
        }
    });
});