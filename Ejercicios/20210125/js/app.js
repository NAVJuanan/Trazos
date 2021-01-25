// alumnos
alumnoUno = {
    firstName: "Javier",
    lastName: "Pérez Sánchez",
    birthDate: new Date(2000, 01, 21),
    grade: 8.5,
    age: function () {
        const todayDate = new Date();
        let currentAge = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            currentAge--;
        }

        return currentAge;
    }
}

alumnoDos = {
    firstName: "María",
    lastName: "Rodríguez Peña",
    birthDate: new Date(2000, 10, 21),
    grade: 9.1,
    age: function () {
        const todayDate = new Date();
        let currentAge = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            currentAge--;
        }

        return currentAge;
    }
}

alumnoTres = {
    firstName: "Pedro",
    lastName: "Martín Fernández",
    birthDate: new Date(2000, 03, 12),
    grade: 7.3,
    age: function () {
        const todayDate = new Date();
        let currentAge = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            currentAge--;
        }

        return currentAge;
    }
}

alumnoCuatro = {
    firstName: "Laura",
    lastName: "Sánchez Pérez",
    birthDate: new Date(1999, 09, 15),
    grade: 7.9,
    age: function () {
        const todayDate = new Date();
        let currentAge = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            currentAge--;
        }

        return currentAge;
    }
}


// asignaturas
asignaturaUno = {
    name: "Matemáticas",
    startingDate: new Date(2021, 01, 22),
    teacher: {
        firstName: "Julia",
        lastName: "Machín Hernández",
        birthDate: new Date(1986, 07, 11),
        dni: "50123456F",
        age: function () {
            const todayDate = new Date();
            let currentAge = todayDate.getFullYear() - this.birthDate.getFullYear();

            // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
            if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
                currentAge--;
            }

            return currentAge;
        }
    },
    studentNumber: function () {
        return this.studentList.length;
    },
    studentList: [
        alumnoUno,
        alumnoDos,
        alumnoCuatro
    ],
}


// mostrar en consola
console.log(asignaturaUno);
console.log(asignaturaUno.studentNumber());

console.log(alumnoUno);
console.log(alumnoUno.age());

console.log(alumnoDos);
console.log(alumnoDos.age());

console.log(alumnoTres);
console.log(alumnoTres.age());

console.log(alumnoCuatro);
console.log(alumnoCuatro.age());


// enviar datos a html
nodeCourseTitle = document.querySelector("#courseTitle")
nodeCourseTeacher = document.querySelector("#courseTeacher");
nodeCourseStudents = document.querySelector("#courseStudents");

nodeCourseTitle.textContent = `Curso de ${asignaturaUno.name}`;
nodeCourseTeacher.textContent = `Profesor: ${asignaturaUno.teacher.firstName} ${asignaturaUno.teacher.lastName}`;

let studentsList = "";
for (let i = 0; i < asignaturaUno.studentNumber(); i++) {
    studentsList += `<li>${asignaturaUno.studentList[i].firstName} ${asignaturaUno.studentList[i].lastName}, ${asignaturaUno.studentList[i].age()} años: ${asignaturaUno.studentList[i].grade}</li>`;
}

nodeCourseStudents.innerHTML = studentsList;