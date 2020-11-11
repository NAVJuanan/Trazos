console.log(cuadrado);

// cambia el color al hacer clic en JQuery
$("#cuadrado").click(function () {
    $("#cuadrado").css("background", "coral")
})

// desaparece en 2 segundos al hacer clic en JQuery
$("#cuadrado").click(function () {
    $("#cuadrado").fadeOut(2000)
})