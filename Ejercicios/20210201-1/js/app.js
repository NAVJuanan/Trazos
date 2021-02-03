// definición de límites
const limit = {
    stats1: 80,
    stats2: 70,
    stats3: 90,
    stats4: 65
};

let statsItem1 = 0;
let statsItem2 = 0;
let statsItem3 = 0;
let statsItem4 = 0;


let nodeItems = document.querySelectorAll(".load__item");

// límite 1
const temporizador1 = setInterval(() => {

    if (statsItem1 > limit.stats1) {
        clearInterval(temporizador1);
    } else {
        nodeItems[0].innerHTML = `${statsItem1} %`;
        statsItem1++;
    }
}, 200);

// límite 2
const temporizador2 = setInterval(() => {

    if (statsItem2 > limit.stats2) {
        clearInterval(temporizador2);
    } else {
        nodeItems[1].innerHTML = `${statsItem2} %`;
        statsItem2++;
    }
}, 150);

// límite 3
const temporizador3 = setInterval(() => {

    if (statsItem3 > limit.stats3) {
        clearInterval(temporizador3);
    } else {
        nodeItems[2].innerHTML = `${statsItem3} %`;
        statsItem3++;
    }
}, 300);

// límite 4
const temporizador4 = setInterval(() => {

    if (statsItem4 > limit.stats4) {
        clearInterval(temporizador4);
    } else {
        nodeItems[3].innerHTML = `${statsItem4} %`;
        statsItem4++;
    }
}, 400);