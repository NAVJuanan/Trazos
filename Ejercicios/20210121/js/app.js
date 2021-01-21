alumnoUno = {
    firstName: "Javier",
    lastName: "Pérez Sánchez",
    birthDate: new Date("01/21/2000"),
    grade: 8.5,
    calcAge: function () {
        const todayDate = new Date();
        let age = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            age--;
        }
        console.log(age);
    }
}

alumnoDos = {
    firstName: "María",
    lastName: "Rodríguez Peña",
    birthDate: new Date("10/21/2000"),
    grade: 9.1,
    calcAge: function () {
        const todayDate = new Date();
        let age = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            age--;
        }
        console.log(age);
    }
}

alumnoTres = {
    firstName: "Pedro",
    lastName: "Martín Fernández",
    birthDate: new Date("03/12/2001"),
    grade: 7.3,
    calcAge: function () {
        const todayDate = new Date();
        let age = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            age--;
        }
        console.log(age);
    }
}

alumnoCuatro = {
    firstName: "Laura",
    lastName: "Sánchez Pérez",
    birthDate: new Date("09/15/1999"),
    grade: 7.9,
    calcAge: function () {
        const todayDate = new Date();
        let age = todayDate.getFullYear() - this.birthDate.getFullYear();

        // restamos 1 día porque o hay un bug o las horas cuentan para contemplar el mismo día
        if ((todayDate.getMonth() < this.birthDate.getMonth()) || ((todayDate.getMonth() === this.birthDate.getMonth()) && (todayDate.getDay() < (this.birthDate.getDay() - 1)))) {
            age--;
        }
        console.log(age);
    }
}

console.log(alumnoUno);
alumnoUno.calcAge();

console.log(alumnoDos);
alumnoDos.calcAge();

console.log(alumnoTres);
alumnoTres.calcAge();

console.log(alumnoCuatro);
alumnoCuatro.calcAge();