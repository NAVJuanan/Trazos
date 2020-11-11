console.log(cuadrado);

// cambia el color al hacer clic en JQuery
$("#cuadrado").click(function () {
    $("#cuadrado").css("background", "coral")
})

// desaparece en 3 segundos al hacer clic en JQuery
$("#cuadrado").click(function () {
    $("#cuadrado").fadeOut(2000)
})

// añade una clase que da padding al hacer doble clic
$("#cuadrado").dblclick(function () {
    $("#cuadrado").addClass("cuadrado-crece")
})