"use strict";

let nodeAllCards = document.querySelector("#allCards");
let nodeAllForests = document.querySelector("#allForests");
let nodeAllSwamps = document.querySelector("#allSwamps");
let nodeAllMountains = document.querySelector("#allMountains");

// filtro por total
nodeAllCards.addEventListener("click", function () {
    let nodeAll = document.querySelectorAll(".filter-image");

    for (let i = 0; i < nodeAll.length; i++) {
        nodeAll[i].classList.remove("filter-image--hidden");
    }
})

// filtro por cada categoría

nodeAllForests.addEventListener("click", function () {
    let nodeForest = document.querySelectorAll(".filter-image");

    for (let i = 0; i < nodeForest.length; i++) {
        let nodeClassList = nodeForest[i].className;

        if (!nodeClassList.includes("forest")) {
            nodeForest[i].classList.add("filter-image--hidden");
        } else {
            nodeForest[i].classList.remove("filter-image--hidden");
        }
    }
})

nodeAllSwamps.addEventListener("click", function () {
    let nodeSwamp = document.querySelectorAll(".filter-image");

    for (let i = 0; i < nodeSwamp.length; i++) {
        let nodeClassList = nodeSwamp[i].className;

        if (!nodeClassList.includes("swamp")) {
            nodeSwamp[i].classList.add("filter-image--hidden");
        } else {
            nodeSwamp[i].classList.remove("filter-image--hidden");
        }
    }
})

nodeAllMountains.addEventListener("click", function () {
    let nodeMountain = document.querySelectorAll(".filter-image");

    for (let i = 0; i < nodeMountain.length; i++) {
        let nodeClassList = nodeMountain[i].className;

        if (!nodeClassList.includes("mountain")) {
            nodeMountain[i].classList.add("filter-image--hidden");
        } else {
            nodeMountain[i].classList.remove("filter-image--hidden");
        }
    }
})