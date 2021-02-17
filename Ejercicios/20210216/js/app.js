"use strict";

/*** JQuery ***/
$(document).ready(() => {

    // hacer scroll por el contenedor de texto en vertical
    $(".text__container").on({
        scroll: function () {
            const scrollMax = this.scrollHeight; // 3720
            const scrollSize = this.offsetHeight; // 938
            const scrollLeftSize = this.scrollWidth; // 1001
            const scrollTotal = scrollMax - scrollSize;
            const scrollCurrent = $(this).scrollTop();
            const scrollPercentage = Math.floor((scrollCurrent * 100) / scrollTotal);
            const scrollLeft = Math.floor((scrollLeftSize * scrollPercentage) / 100);

            $(".text__bar")
                .text(`${scrollPercentage} %`)
                .css("width", `${scrollLeft}px`);
        }
    });
});