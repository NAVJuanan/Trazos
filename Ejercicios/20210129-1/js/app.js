// clase Alumno
class Alumno {

    // constructor con las propiedades
    constructor(firstName, lastName, birthDate, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.grade = grade;
    }

    // función para calcular la edad
    age() {
        const todayDate = new Date();
        let currentAge = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            currentAge--;
        }

        return currentAge;
    }
}

// creamos instancias de alumnos
const alumnoUno = new Alumno("Javier", "Pérez Sánchez", new Date(2000, 01, 21), 8.5);
const alumnoDos = new Alumno("María", "Rodríguez Peña", new Date(2000, 10, 21), 9.1);
const alumnoTres = new Alumno("Pedro", "Martín Fernández", new Date(2000, 03, 12), 7.3);
const alumnoCuatro = new Alumno("Laura", "Sánchez Pérez", new Date(1999, 09, 15), 7.9);

// mostrar en consola
console.log(alumnoUno);
console.log(alumnoUno.age());

console.log(alumnoDos);
console.log(alumnoDos.age());

console.log(alumnoTres);
console.log(alumnoTres.age());

console.log(alumnoCuatro);
console.log(alumnoCuatro.age());


// clase Profesor
class Profesor {

    constructor(firstName, lastName, birthDate, dni) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.dni = dni;
    }

    // función para calcular la edad
    age() {
        const todayDate = new Date();
        let currentAge = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            currentAge--;
        }

        return currentAge;
    }
}

// creamos instancias de profesores
const profesorUno = new Profesor("Julia", "Machín Hernández", new Date(1986, 07, 11), "50123456F");
const profesorDos = new Profesor("Miguel", "Fernández López", new Date(1984, 11, 03), "20123456G");

// mostrar en consola
console.log(profesorUno);
console.log(profesorUno.age());

console.log(profesorDos);
console.log(profesorDos.age());


// clase Asignatura
class Asignatura {

    constructor(name, startingDate, teacher) {
        this.name = name;
        this.startingDate = startingDate;
        this.teacher = teacher;
    }

    studentList = [];

    studentNumber() {
        return this.studentList.length;
    };

    addStudent(student) {
        this.studentList.push(student);
    }
}

// creamos instancias de asignaturas
const asignaturaUno = new Asignatura("Matemáticas", new Date(2021, 02, 02), profesorUno);
const asignaturaDos = new Asignatura("Literatura", new Date(2021, 04, 02), profesorDos);

// mostrar en consola
console.log(asignaturaUno);
console.log(asignaturaUno.studentNumber());

console.log(asignaturaDos);
asignaturaDos.addStudent(alumnoUno);
asignaturaDos.addStudent(alumnoDos);
asignaturaDos.addStudent(alumnoCuatro);
console.log(asignaturaDos.studentNumber());


// enviar datos a html
let nodeCourseTitle = document.querySelector("#courseTitle");
nodeCourseTitle.innerHTML = `Curso de ${asignaturaDos.name}`;

let nodeCourseTeacher = document.querySelector("#courseTeacher");
nodeCourseTeacher.innerHTML = `Profesor: ${asignaturaDos.teacher.firstName} ${asignaturaDos.teacher.lastName}`;

let nodeCourseStudents = document.querySelector("#courseStudents");

let studentsList = "";
for (let i = 0; i < asignaturaDos.studentNumber(); i++) {
    studentsList += `<li>${asignaturaDos.studentList[i].firstName} ${asignaturaDos.studentList[i].lastName}, ${asignaturaDos.studentList[i].age()} años: ${asignaturaDos.studentList[i].grade}</li>`;
}

nodeCourseStudents.innerHTML = studentsList;