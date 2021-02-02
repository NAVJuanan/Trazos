"use strict"

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
    nodeItems[i].innerHTML = "0";
}

// obtenemos nodos con botones e inicializamos
let nodeButtons = document.querySelectorAll(".load__button");
for (let i = 0; i < nodeButtons.length; i++) {

    if (nodeButtons[i].id !== "startId") {
        nodeButtons[i].classList.add("load__button--disabled");
    }
}

// definimos el temporizador
let temporizador = null;


// al hacer click en Iniciar se inicia el temporizador
let nodeStart = document.querySelector("#startId");
nodeStart.addEventListener("click", function () {

    if (temporizador === null) {

        temporizador = setInterval(() => {
            updateTimer();
            updateHTML();
        }, 1);

        for (let i = 0; i < nodeButtons.length; i++) {

            if (nodeButtons[i].id === "stopId") {
                nodeButtons[i].classList.remove("load__button--disabled");
            } else {
                nodeButtons[i].classList.add("load__button--disabled");
            }
        }
    }
});

// al hacer click en Parar se elimina el temporizador
let nodeStop = document.querySelector("#stopId");
nodeStop.addEventListener("click", function () {

    clearInterval(temporizador);
    temporizador = null;

    for (let i = 0; i < nodeButtons.length; i++) {

        if (nodeButtons[i].id === "stopId") {
            nodeButtons[i].classList.add("load__button--disabled");
        } else {
            nodeButtons[i].classList.remove("load__button--disabled");
        }
    }
});

// al hacer click en Resetear se inicializan los contadores
let nodeReset = document.querySelector("#resetId");
nodeReset.addEventListener("click", function () {

    if (temporizador === null) {
        current.hour = 0;
        current.minute = 0;
        current.second = 0;
        current.milisecond = 0;

        updateHTML();
    }
});

// al hacer click en Guardar se añade un registro
let nodeSave = document.querySelector("#saveId");
nodeSave.addEventListener("click", function () {

    if (temporizador === null) {
        addRegister();
    }
});


// sumamos 1ms
function updateTimer() {

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
}

// actualizamos html
function updateHTML() {
    nodeItems[0].innerHTML = `${current.hour}`;
    nodeItems[1].innerHTML = `${current.minute}`;
    nodeItems[2].innerHTML = `${current.second}`;
    nodeItems[3].innerHTML = `${current.milisecond}`;
}

// añadimos un registro
function addRegister() {
    let nodeRegister = document.createElement("p");
    nodeRegister.classList.add("load-data__item");
    nodeRegister.innerHTML = `${current.hour}:${current.minute}:${current.second}:${current.milisecond}`;

    let nodeData = document.querySelector(".load__data");
    nodeData.appendChild(nodeRegister);
}