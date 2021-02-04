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
    const maxNumber = Math.random() * personaGenerica.nameNumber();
    console.log("total", personaGenerica.nameNumber());
    console.log("resultado", maxNumber);
    console.log(personaGenerica.firstNameList[maxNumber]);
});