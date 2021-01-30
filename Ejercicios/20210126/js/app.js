document.querySelector("#btnSend").addEventListener("click", function () {

    // obtenemos los valores introducidos
    let studentFirstName = document.querySelector("#firstName").value;
    let studentLastName = document.querySelector("#lastName").value;
    let studentBirthDate = Number(document.querySelector("#birthDate").value);

    // obtenemos el contenedor padre
    const studentList = document.querySelector(".student-list");


    // creamos un elemento para mostrar al nuevo estudiante
    nodeStudentRegister = document.createElement("div");
    nodeStudentRegister.classList.add("student-register");

    // nodo para el nombre
    nodeStudentName = document.createElement("h3")
    nodeStudentName.classList.add("student-register__title");
    nodeStudentName.innerHTML = `${studentFirstName} ${studentLastName}`;

    // nodos para la edad
    nodeStudentAge = document.createElement("p")
    nodeStudentAge.classList.add("student-register__age");
    nodeStudentAge.innerHTML = `Edad`;

    nodeStudentBirth = document.createElement("p")
    nodeStudentBirth.classList.add("student-register__birth");
    nodeStudentBirth.innerHTML = `${age(studentBirthDate)} años`;

    // adjuntamos los nodos hijos al nodo registro
    nodeStudentRegister.appendChild(nodeStudentName);
    nodeStudentRegister.appendChild(nodeStudentAge);
    nodeStudentRegister.appendChild(nodeStudentBirth);

    // adjuntamos el registro completo a la lista de estudiantes
    studentList.appendChild(nodeStudentRegister);


    // vaciamos el formulario
    document.querySelector("#firstName").value = " ";
    document.querySelector("#lastName").value = " ";
    document.querySelector("#birthDate").value = "2000";
})

// función para calcular la edad
function age(studentBirthDate) {
    const todayDate = new Date();

    return todayDate.getFullYear() - studentBirthDate;
}