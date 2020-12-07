// bxSlider script
$(document).ready(function () {
    $(".slider").bxSlider({
        auto: true,
        autoControls: true,
        mode: "horizontal",
        nextText: ">",
        prevText: "<",
        stopAutoOnClick: true,
    });
});

// hover sobre elementos
$(".main__top1--container1").hover(function () {
    $(".main__top1--container").addClass("opacity-effect");
    $(this).removeClass("opacity-effect");
    $(this).find(".top1__text3").addClass("top1__text3--black");
}, function () {
    $(".main__top1--container").removeClass("opacity-effect");
    $(this).find(".top1__text3").removeClass("top1__text3--black");
});

$(".main__top1--container2").hover(function () {
    $(".main__top1--container").addClass("opacity-effect");
    $(this).removeClass("opacity-effect");
    $(this).find(".top1__text3").addClass("top1__text3--black");
}, function () {
    $(".main__top1--container").removeClass("opacity-effect");
    $(this).find(".top1__text3").removeClass("top1__text3--black");
});

$(".main__top1--container3").hover(function () {
    $(".main__top1--container").addClass("opacity-effect");
    $(this).removeClass("opacity-effect");
    $(this).find(".top1__text3").addClass("top1__text3--black");
}, function () {
    $(".main__top1--container").removeClass("opacity-effect");
    $(this).find(".top1__text3").removeClass("top1__text3--black");
});