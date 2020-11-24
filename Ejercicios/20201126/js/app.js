// let picturePath;

// al hacer clic en un cuadro, obtenemos la ruta de la imagen
// $(".main-section__item").on("click", function () {
//     picturePath = $(this).find(".main-section__img").attr("src");
//     alert(picturePath);
// });

// función lightbox con sus diferentes opciones
$('[data-fancybox]').fancybox({

    protect: true, // para que no se pueda descargar
    openEffect: 'elastic', // efecto al abrir
    closeEffect: 'fade', // efecto al cerrar
    buttons: ["close", "share"] // botón para cerrar y rrss
});