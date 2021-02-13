"use strict";

/*** JQuery ***/
$(document).ready(() => {

    // mostrar el primero al cargar
    const nodeImages = $(".slider__img");
    nodeImages.hide();
    nodeImages.first().show();

    // variables para controlar tamaño y nodo actual mostrado
    let nodeCurrent = 0;
    const nodeSize = nodeImages.length;

    // definimos temporizador para simular un click derecho cada 6 sg
    let setRightClick = null;
    manageInterval();

    // click flecha izquierda
    $(".arrow__left").on({
        click: () => {
            const transitionTime = 500;

            // ocultamos la imagen actual y vamos a la anterior
            nodeImages.eq(nodeCurrent).hide();
            nodeCurrent--;

            // control para volver a la última imagen si pasamos el límite
            if (nodeCurrent < 0) {
                nodeCurrent = nodeSize - 1;
            }

            // mostramos la imagen seleccionada con transición
            nodeImages.eq(nodeCurrent).show("slide", { direction: "left" }, transitionTime);

            // reseteamos el temporizador
            manageInterval();
        }
    });

    // click flecha derecha
    $(".arrow__right").on({
        click: () => rightClick()
    });


    // función para el click derecho
    function rightClick() {
        const transitionTime = 500;

        // ocultamos la imagen actual y vamos a la siguiente
        nodeImages.eq(nodeCurrent).hide();
        nodeCurrent++;

        // control para volver a la primera imagen si pasamos el límite
        if (nodeCurrent >= nodeSize) {
            nodeCurrent = 0;
        }

        // mostramos la imagen seleccionada con transición
        nodeImages.eq(nodeCurrent).show("slide", { direction: "right" }, transitionTime);

        // reseteamos el temporizador
        manageInterval();
    }

    // función para la gestión del temporizador
    function manageInterval() {
        const intervalTime = 6000;

        if (setRightClick !== null) {
            clearInterval(setRightClick);
            setRightClick = null;
        }

        setRightClick = setInterval(() => rightClick(), intervalTime);
    }
});