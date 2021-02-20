"use strict";

/*** JQuery ***/
$(document).ready(() => {

    let currentImage = 1;
    let delayImage = undefined;

    $(".slider__img").on({
        click: function () {
            const transitionTime = 500;
            const selectedImage = parseInt($(this).attr("data-img"));

            if (!delayImage) {
                delayImage = setInterval(function () {
                    if (selectedImage > currentImage) {
                        $(".slider__big-img").attr("src", $(".slider__img").eq(currentImage).attr("src"));
                        currentImage++;
                    } else {
                        clearInterval(delayImage);
                        delayImage = undefined;
                    }
                }, transitionTime)
            }
        }
    })
})