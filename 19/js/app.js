console.log(cuadrado);

// cambia el color al hacer clic en JQuery
$("#cuadrado").click(function () {
    $("#cuadrado").css("background", "coral")
})

// desaparece en 3 segundos al hacer clic en JQuery
$("#cuadrado").click(function () {
    $("#cuadrado").fadeOut(2000)
})

// añade una clase que cambia el color de fondo a la lista al hacer doble clic
$("#cuadrado").dblclick(function () {
    $(".lista").addClass("lista-color")
})

// crear un objeto en JavaScript
let movil = {
    marca: "Apple",
    modelo: "iPhone 11 Pro",
    ios: 14,
    apps: ["Whatsapp", "Spotify"],
    garantia: false,
    llamar: function () {
        console.log("ring ring");
    },
    hacerFoto: function () {
        console.log("click");
    }
}