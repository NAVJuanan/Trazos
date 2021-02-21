"use strict";

/*** JQuery ***/
$(document).ready(() => {

    let currentImage = 1;
    let delayImage = undefined;

    $(".slider__img").on({
        click: function () {
            const transitionTime = 500;
            const percentage = 100;
            const selectedImage = parseInt($(this).attr("data-img"));

            while (selectedImage !== currentImage) {

                if (selectedImage > currentImage) {
                    // transicionamos las imágenes hasta llegar al objetivo
                    $(".slider__main").animate({ right: `${currentImage * percentage}%` }, transitionTime, "swing");
                    currentImage++;
                } else if (selectedImage < currentImage) {
                    currentImage--;
                    // transicionamos las imágenes hasta llegar al objetivo
                    $(".slider__main").animate({ right: `${(currentImage - 1) * percentage}%` }, transitionTime, "swing");
                }
            }
        }
    })
})