let pictureCounter = 1;

// clic en flecha derecha -> aumenta
$(".slider__arrow-right").click(function () {

    let translatePercentage = 0;
    const percentage = -33;

    pictureCounter++;

    if (pictureCounter === 4) {
        pictureCounter = 3;
    }

    translatePercentage = percentage * (pictureCounter - 1);

    switch (pictureCounter) {

        case 2:
            $(".slider__arrow-left").removeClass("slider__arrow--hide");
            $(".slider__container").css("transform", "translateX(" + translatePercentage + "%)");
            break;
        case 3:
            $(".slider__arrow-right").addClass("slider__arrow--hide");
            $(".slider__container").css("transform", "translateX(" + translatePercentage + "%)");
            break;
    }

    $(".slider__point").removeClass("slider__point--active");
})

// clic en flecha izquierda -> disminuye
$(".slider__arrow-left").click(function () {

    let translatePercentage = 0;
    const percentage = -33;

    pictureCounter--;

    if (pictureCounter === 0) {
        pictureCounter = 1;
    }

    translatePercentage = percentage * (pictureCounter - 1);

    switch (pictureCounter) {

        case 1:
            $(".slider__arrow-left").addClass("slider__arrow--hide");
            $(".slider__container").css("transform", "translateX(" + translatePercentage + "%)");
            break;
        case 2:
            $(".slider__arrow-right").removeClass("slider__arrow--hide");
            $(".slider__container").css("transform", "translateX(" + translatePercentage + "%)");
            break;
    }

    $(".slider__point").removeClass("slider__point--active");
})