// clase Persona
class Persona {

    // constructor con las propiedades
    constructor() {
        this.firstNameList = [];
    }

    nameNumber() {
        return this.firstNameList.length;
    };

    addName(firstName) {
        this.firstNameList.push(firstName);
    }
}

const personaGenerica = new Persona(); // objeto que guarda los participantes

// añadir nuevos elementos
document.querySelector("#btnAdd").addEventListener("click", function () {
    let nodeName = document.querySelector("#firstName");

    if (nodeName.value.length > 0) {
        personaGenerica.addName(nodeName.value);

        let nodeNewName = document.createElement("p");
        nodeNewName.classList.add("draw-data__name");
        nodeNewName.innerHTML = nodeName.value;

        let nodeData = document.querySelector(".draw-data")
        nodeData.appendChild(nodeNewName);

        nodeName.value = "";
    }
});

// sortear entre los elementos existentes
document.querySelector("#btnDraw").addEventListener("click", function () {

    if (personaGenerica.nameNumber() >= 1) {

        // vaciamos la clase '.selected' de los nombres introducidos
        let nodePeople = document.querySelectorAll(".draw-data__name");
        for (let i = 0; i < personaGenerica.nameNumber(); i++) {
            nodePeople[i].classList.remove("selected");
        }

        // cada 0.5 segundos se transiciona y cada 3 segundos se sortea
        const transitionTime = 500;
        const transitionTotal = 6;
        let transitionNumber = 0;

        const drawTransition = setInterval(function () {

            // vaciamos la clase '.transition' de los nombres introducidos
            for (let i = 0; i < personaGenerica.nameNumber(); i++) {
                nodePeople[i].classList.remove("transition");
            }

            if (transitionNumber >= transitionTotal) {

                // añadimos la clase '.selected' al nombre ganador
                const drawResult = drawPerson(0, personaGenerica.nameNumber() - 1);
                nodePeople[drawResult].classList.add("selected");

                // ciclo finalizado
                clearInterval(drawTransition);
            } else {

                // añadimos la clase '.transition' al nombre de la transición
                const drawResult = drawPerson(0, personaGenerica.nameNumber() - 1);
                nodePeople[drawResult].classList.add("transition");

                transitionNumber++;
            }
        }, transitionTime);
    }
});

// función para devolver aleatorio
function drawPerson(minValue, maxValue) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}