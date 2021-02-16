"use strict";

/*** JQuery ***/
$(document).ready(() => {

    // mover el ratón por el contenedor de imágenes
    $(".image__container").on({
        mousemove: function (evento) {
            const posX = evento.pageX * (-.05);
            const posY = evento.pageY * (-.05);
            $(this).css("background-position", `${posX}px ${posY}px`);
        }
    });

    // mover el ratón por el contenedor de imágenes
    // $(".image__container").on({
    //     mousemove: evento => {
    //         const posX = evento.pageX * (-.05);
    //         const posY = evento.pageY * (-.05);
    //         $(".image__container").css("background-position", `${posX}px ${posY}px`);
    //     }
    // });
});