// cookies desaparecen al pinchar el botón Aceptar
$(".cookies__btn-accept").click(function () {
    $(".cookies").addClass("cookies--hide")
})

// bxSlider script
$(document).ready(function () {
    $('.slider').bxSlider();
});