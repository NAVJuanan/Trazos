// definición de límites
const limit = {
    hour: 23,
    minute: 59,
    second: 59,
    milisecond: 999
};

// definición de actual
let current = {
    hour: 0,
    minute: 0,
    second: 0,
    milisecond: 0
};

// obtenemos nodos con cronómetro e inicializamos
let nodeItems = document.querySelectorAll(".load-item__time");
for (let i = 0; i < nodeItems.length; i++) {
    nodeItems[i].innerHTML = "00";
}

// en cada ms se suma 1ms y actualizamos el resto de datos
const temporizador = setInterval(() => {

    // ms
    if (current.milisecond >= limit.milisecond) {
        current.milisecond = 0;
        current.second++;
    } else {
        current.milisecond++;
    }

    // sg
    if (current.second > limit.second) {
        current.second = 0;
        current.minute++;
    }

    //mn
    if (current.minute > limit.minute) {
        current.minute = 0;
        current.hour++;
    }

    //hr
    if (current.hour > limit.hour) {
        current.hour = 0;
    }

    // actualizamos html
    nodeItems[0].innerHTML = `${current.hour}`;
    nodeItems[1].innerHTML = `${current.minute}`;
    nodeItems[2].innerHTML = `${current.second}`;
    nodeItems[3].innerHTML = `${current.milisecond}`;
}, 1);