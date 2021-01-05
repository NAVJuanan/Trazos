let edad = prompt("Introduzca su edad");

if (edad < 0) {
    alert("No has nacido, te quedan " + (0 - edad) + " años para nacer");
} else if (edad >= 0 && edad < 2) {
    alert("Eres un bebé, te quedan " + (2 - edad) + " años para ser un niño");
} else if (edad >= 2 && edad < 12) {
    alert("Eres un niño, te quedan " + (12 - edad) + " años para ser un adolescente");
} else if (edad >= 12 && edad < 18) {
    alert("Eres un adolescente, te quedan " + (18 - edad) + " años para ser un adulto");
} else if (edad >= 18 && edad < 65) {
    alert("Eres un adulto, te quedan " + (65 - edad) + " años para entrar en la tercera edad");
} else {
    alert("Eres de la tercera edad");
}