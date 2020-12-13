/*** JQuery ***/

$(document).ready(function () {
    console.log("¡listo!");

    // fancyBox plugin
    $("[data-fancybox]").fancybox({

        protect: true,
        openEffect: 'elastic',
        closeEffect: 'fade',
        buttons: ["close"]
    });
});