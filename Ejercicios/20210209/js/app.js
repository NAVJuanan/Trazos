"use strict";

/*** JQuery ***/
$(document).ready(function () {

    // retiramos filtros
    $("#allCards").on({
        click: function () {
            $(".filter-image").removeClass("filter-image--hidden");
        },

        // testeo 2 eventos y muestro this y $(this)
        dblclick: function () {
            $(".filter-image").addClass("filter-image--hidden");
            console.log(this);
            console.log($(this));
        }
    });

    // filtro por bosques
    $("#allForests").on({
        click: function () {
            $(".filter-image").addClass("filter-image--hidden");
            $(".forest").removeClass("filter-image--hidden");
        }
    });

    // filtro por pantanos
    $("#allSwamps").on({
        click: function () {
            $(".filter-image").addClass("filter-image--hidden");
            $(".swamp").removeClass("filter-image--hidden");
        }
    });

    // filtro por montañas
    $("#allMountains").on({
        click: function () {
            $(".filter-image").addClass("filter-image--hidden");
            $(".mountain").removeClass("filter-image--hidden");
        }
    });

    // evento click a cada imagen
    $(".filter-image").on({
        click: function () {

            // abrimos el lightbox
            $(".lightbox").addClass("lightbox--open");

            // cargamos la imagen del elemento que hace 'click'
            $(".lightbox-image").attr("src", $(this).attr("src"));
        }
    });

    // evento click en lightbox fuera de imagen
    $(".lightbox").on({
        click: function () {

            // descargamos la imagen
            $(".lightbox-image").attr("src", "#");

            // cerramos el lightbox
            $(this).removeClass("lightbox--open");
        }
    });
});