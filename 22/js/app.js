let pictureCounter = 1;

// clic en flecha derecha -> aumenta
$(".slider__arrow-right").click(function () {

    pictureCounter++;
    movePicture();
})

// clic en flecha izquierda -> disminuye
$(".slider__arrow-left").click(function () {

    pictureCounter--;
    movePicture();
})

// clic en los puntos para avanzar o retroceder
$(".slider__point:nth-of-type(1)").click(function () {

    pictureCounter = 1;
    movePicture();
})

// clic en los puntos para avanzar o retroceder
$(".slider__point:nth-of-type(2)").click(function () {

    pictureCounter = 2;
    movePicture();
})

// clic en los puntos para avanzar o retroceder
$(".slider__point:nth-of-type(3)").click(function () {

    pictureCounter = 3;
    movePicture();
})


// función para mover las imágenes
function movePicture() {

    let translatePercentage = 0;
    const percentage = -33;

    if (pictureCounter === 0) {
        pictureCounter = 1;
    }

    if (pictureCounter === 4) {
        pictureCounter = 3;
    }

    translatePercentage = percentage * (pictureCounter - 1);

    switch (pictureCounter) {

        case 1:
            $(".slider__arrow-left").addClass("slider__arrow--hide");
            $(".slider__container").css("transform", "translateX(" + translatePercentage + "%)");
            $(".slider__point").removeClass("slider__point--active");
            $(".slider__point:nth-of-type(" + pictureCounter + ")").addClass("slider__point--active");
            break;

        case 2:
            $(".slider__arrow-left").removeClass("slider__arrow--hide");
            $(".slider__arrow-right").removeClass("slider__arrow--hide");
            $(".slider__container").css("transform", "translateX(" + translatePercentage + "%)");
            $(".slider__point").removeClass("slider__point--active");
            $(".slider__point:nth-of-type(" + pictureCounter + ")").addClass("slider__point--active");
            break;

        case 3:
            $(".slider__arrow-right").addClass("slider__arrow--hide");
            $(".slider__container").css("transform", "translateX(" + translatePercentage + "%)");
            $(".slider__point").removeClass("slider__point--active");
            $(".slider__point:nth-of-type(" + pictureCounter + ")").addClass("slider__point--active");
            break;
    }
}