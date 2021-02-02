// definición de límites y actual
const limit = {
    hour: 23,
    minute: 59,
    second: 59,
    milisecond: 999
};

let current = {
    hour: 0,
    minute: 0,
    second: 0,
    milisecond: 0
};


nodeItems = document.querySelectorAll(".load-item__time");
for (let i = 0; i < nodeItems.length; i++) {
    nodeItems[i].innerHTML = "00";
}

// // límite 1
// const temporizador1 = setInterval(() => {

//     if (statsItem1 > limit.stats1) {
//         clearInterval(temporizador1);
//     } else {
//         nodeItems[0].innerHTML = `${statsItem1} %`;
//         statsItem1++;
//     }
// }, 200);

// // límite 2
// const temporizador2 = setInterval(() => {

//     if (statsItem2 > limit.stats2) {
//         clearInterval(temporizador2);
//     } else {
//         nodeItems[1].innerHTML = `${statsItem2} %`;
//         statsItem2++;
//     }
// }, 150);

// // límite 3
// const temporizador3 = setInterval(() => {

//     if (statsItem3 > limit.stats3) {
//         clearInterval(temporizador3);
//     } else {
//         nodeItems[2].innerHTML = `${statsItem3} %`;
//         statsItem3++;
//     }
// }, 300);

// // límite 4
// const temporizador4 = setInterval(() => {

//     if (statsItem4 > limit.stats4) {
//         clearInterval(temporizador4);
//     } else {
//         nodeItems[3].innerHTML = `${statsItem4} %`;
//         statsItem4++;
//     }
// }, 400);