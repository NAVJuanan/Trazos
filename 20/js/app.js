// añade clases para hacer un slider
$(".arrow__right").click(function () {
    $(".container__huge").addClass("container__huge--show2")
    $(".arrow__left").removeClass("arrow__left--hide")
    $(".arrow__right").addClass("arrow__right--hide")
})

$(".arrow__left").click(function () {
    $(".container__huge").removeClass("container__huge--show2")
    $(".arrow__right").removeClass("arrow__right--hide")
    $(".arrow__left").addClass("arrow__left--hide")
})


// añade clases para hacer un menú de móvil
$(".header__icon").click(function () {
    $(".header__nav").toggleClass("header__nav--show")
})