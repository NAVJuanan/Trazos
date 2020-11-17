let x = 1;

// avanzamos el slider a la derecha
$(".arrow__right").click(function () {

    x++;

    if (x === 5) {
        x = 1;
    }

    switch (x) {

        case 1:
            $(".slider__image-one").removeClass("slider__image--hide");
            $(".arrow__left").addClass("arrow__left--hide")
            break;

        case 2:
            $(".slider__image-one").addClass("slider__image--hide");
            $(".slider__image-two").removeClass("slider__image--hide");
            $(".arrow__left").removeClass("arrow__left--hide");
            break;

        case 3:
            $(".slider__image-two").addClass("slider__image--hide");
            $(".slider__image-three").removeClass("slider__image--hide");
            $(".arrow__left").removeClass("arrow__left--hide");
            break;

        case 4:
            $(".slider__image-three").addClass("slider__image--hide");
            $(".slider__image-four").removeClass("slider__image--hide");
            $(".arrow__right").addClass("arrow__right--hide");
            break;
    }
});

// retrocedemos el slider a la izquierda
$(".arrow__left").click(function () {

    x--;

    if (x === 0) {
        x = 1;
    }

    switch (x) {

        case 1:
            $(".slider__image-two").addClass("slider__image--hide");
            $(".slider__image-one").removeClass("slider__image--hide");
            $(".arrow__left").addClass("arrow__left--hide")
            break;

        case 2:
            $(".slider__image-three").addClass("slider__image--hide");
            $(".slider__image-two").removeClass("slider__image--hide");
            $(".arrow__right").removeClass("arrow__right--hide");
            break;

        case 3:
            $(".slider__image-four").addClass("slider__image--hide");
            $(".slider__image-three").removeClass("slider__image--hide");
            $(".arrow__right").removeClass("arrow__right--hide");
            break;

        case 4:
            $(".slider__image-four").removeClass("slider__image--hide");
            $(".arrow__right").addClass("arrow__right--hide");
            break;
    }
});