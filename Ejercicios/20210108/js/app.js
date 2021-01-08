const arrayQuestions = ["¿Cuál es mi color favorito?", "¿Cómo me llamo?", "¿De dónde soy?"];
const arrayRightAnswers = ["Azul", "Juanan", "Alcalá"];
const nodeBody = document.querySelector("#result");
const nodeDuration = document.querySelector("#duration");
const startingHour = new Date();
let boolContinue = true;

const nombreUsuario = prompt("¿Cuál es tu nombre?");

let Answer = prompt("Hola " + nombreUsuario + ", " + arrayQuestions[0]);
if (Answer === arrayRightAnswers[0]) {
    alert("¡Felicidades " + nombreUsuario + "! Has acertado la primera pregunta");
} else {
    nodeBody.innerHTML = "¡Tienes que estudiar más! !" + nombreUsuario + "! La respuesta era " + arrayRightAnswers[0];
    boolContinue = false;
}

if (boolContinue) {
    Answer = prompt("Hola " + nombreUsuario + ", " + arrayQuestions[1]);
    if (Answer === arrayRightAnswers[1]) {
        alert("¡Felicidades " + nombreUsuario + "! Has acertado la segunda pregunta");
    } else {
        nodeBody.innerHTML = "¡Fallaste, vuelve a intentarlo! !" + nombreUsuario + "! La respuesta era " + arrayRightAnswers[1];
        boolContinue = false;
    }
}

if (boolContinue) {
    Answer = prompt("Hola " + nombreUsuario + ", " + arrayQuestions[2]);
    if (Answer === arrayRightAnswers[2]) {
        nodeBody.innerHTML = "¡Felicidades " + nombreUsuario + "! Has acertado todas las preguntas";
    } else {
        nodeBody.innerHTML = "¡Fallaste, acertaste 2 preguntas! !" + nombreUsuario + "! La respuesta era " + arrayRightAnswers[2];
    }
}

boolContinue = false;

const endingHour = new Date();
const totalSeconds = (endingHour.getTime() - startingHour.getTime()) / 1000;
nodeDuration.innerHTML = "Has tardado " + totalSeconds + " segundos";