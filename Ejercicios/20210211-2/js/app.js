"use strict";

/*** JQuery ***/
$(document).ready(function () {

    // mostrar el primero al cargar
    let nodeImages = $(".slider__img");
    nodeImages.addClass("slider__img--hide");
    nodeImages.first().removeClass("slider__img--hide");

    // variables para controlar tamaño y nodo actual mostrado
    let nodeCurrent = 0;
    const nodeSize = nodeImages.length;

    // click flecha izquierda
    $(".arrow__left").on({
        click: function () {

            // ocultamos la imagen actual y vamos a la anterior
            nodeImages.eq(nodeCurrent).addClass("slider__img--hide");
            nodeCurrent--;

            // control para volver a la última imagen si pasamos el límite
            if (nodeCurrent < 0) {
                nodeCurrent = nodeSize - 1;
            }

            // mostramos la imagen seleccionada
            nodeImages.eq(nodeCurrent).removeClass("slider__img--hide");
        }
    });

    // click flecha derecha
    $(".arrow__right").on({
        click: function () {

            // ocultamos la imagen actual y vamos a la siguiente
            nodeImages.eq(nodeCurrent).addClass("slider__img--hide");
            nodeCurrent++;

            // control para volver a la primera imagen si pasamos el límite
            if (nodeCurrent >= nodeSize) {
                nodeCurrent = 0;
            }

            // mostramos la imagen seleccionada
            nodeImages.eq(nodeCurrent).removeClass("slider__img--hide");
        }
    });
});