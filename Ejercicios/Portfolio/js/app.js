/*** JQuery ***/

$(document).ready(function () {

    // fancyBox plugin
    $("[data-fancybox]").fancybox({

        protect: true,
        openEffect: 'elastic',
        closeEffect: 'fade',
        buttons: ["close"]
    });


    // menú móvil
    $(".header-icon__bars").click(function () {
        $(".header-icon__nav").toggleClass("header-icon__nav--show")
    });


    // foco en el formulario
    $("#firstName").focus(function () {
        $("#firstNameLabel").addClass("label--focus");
    });

    $("#firstName").focusout(function () {
        $("#firstNameLabel").removeClass("label--focus");
    });


    $("#lastName").focus(function () {
        $("#lastNameLabel").addClass("label--focus");
    });

    $("#lastName").focusout(function () {
        $("#lastNameLabel").removeClass("label--focus");
    });


    $("#email").focus(function () {
        $("#emailLabel").addClass("label--focus");
    });

    $("#email").focusout(function () {
        $("#emailLabel").removeClass("label--focus");
    });


    $("#areaComments").focus(function () {
        $("#areaCommentsLabel").addClass("label--focus");
    });

    $("#areaComments").focusout(function () {
        $("#areaCommentsLabel").removeClass("label--focus");
    });


    // añade clase para ocultar las cookies tras aceptar
    $(".cookies__btn").click(function () {
        $(".cookies").addClass("cookies-hide");
    });
});