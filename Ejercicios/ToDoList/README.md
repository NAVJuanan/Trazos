# Proyecto Html, Css, JavaScript y JQuery para Trazos de Juan Antonio Muñoz Valledor

La siguiente web es un gestor de tareas como proyecto para el curso de *JavaScript y JQuery* de la **Escuela Trazos**.

En el proyecto aplico diferentes elementos y técnicas que se han utlizado a lo largo del curso como:
* maquetación flex
* javaScript
* JQuery
* fuentes de terceros
* sass
* bem

## Herramientas utilizadas de terceros 🛠️

* La librería [JQuery](https://jquery.com/) para facilitar la programación.
* La librería [Font-Awesome](https://fontawesome.com/) para añadir iconos a la gestión de las tareas.
* El repositorio [GitHub](https://github.com/NAVJuanan/Trazos/tree/main/Ejercicios/ToDoList) para el seguimiento del código del proyecto.

## Diseño y Estilo 📋
La web está diseñada con 3 contenedores:
* **añadir tareas**: aparece una etiqueta de tipo 'input' para rellenar la tarea a agregar y un botón para que salte la funcionalidad de agregar.
* **tareas a realizar**: es un contenedor mínimo donde sus elementos hijos que serán las tareas, se generarán de forma dinamica.
* **tareas realizadas**: es un contenedor mínimo donde sus elementos hijos que serán las tareas, se generarán de forma dinamica.

La maquetación de la web utiliza flex para posicionar tanto los elementos permanentes como los que se van generando de forma dinámica.
Se utiliza el preprocesador SASS y la metodología BEM para tener una mayor comodidad en la gestión de las diferentes clases y dar los diferentes estilos.

## JavaScript ⚙️
En todo momento utilizamos la librería JQuery para facilitar la programación y el acceso a sus funciones y eventos.

Un único objeto llamado **taskManager** gestionará el contenido de las diferentes tareas como las funcionalidades para añadir, eliminar o mover tareas.

Se compone de 2 propiedades que guardan las diferentes tareas:
* **taskToDoList**: es una lista que contiene las tareas a realizar.
* **taskDoneList**: es una lista que contiene las tareas realizadas.

Se compone de varios métodos que gestionan el comportamiento de la aplicación:
* **addTaskToDo(tarea)**: es un método para añadir la tarea que recibe como parámetro a la lista de tareas a realizar.
* **addTaskDone(tarea)**: es un método para añadir la tarea que recibe como parámetro a la lista de tareas realizadas.
* **checkNewTask(tarea)**: es un método para comprobar si la nueva tarea que se añade, ya existe en alguna de las listas y devolver un error en ese caso.
* **removeTaskToDo(tarea)**: es un método para eliminar la tarea que recibe como parámetro de la lista de tareas a realizar.
* **removeTaskDone(tarea)**: es un método para eliminar la tarea que recibe como parámetro de la lista de tareas realizadas.

Se compone de los siguientes eventos y funciones:
* **click al añadir una tarea**: evento que recoge el valor introducido en el input, revisa si la tarea introducida cumple los requisitos para poder agregarse como nueva tarea a realizar y la agrega si es así, actualiza el dom para verla y reinicia el input para introducir una nueva tarea.
* **drawTaskToDo(tarea)**: función que dibuja en el dom de tareas a realizar la tarea que recibe como parámetro, dándole unas clases, botones para eliminar y mover con sus correspondientes eventos y una id única basada en el nombre de la tarea sin espacios, con lo que facilitamos la gestión de cada tarea.
* **drawTaskDone(tarea)**: función que dibuja en el dom de tareas realizadas la tarea que recibe como parámetro, dándole unas clases, botones para eliminar y mover con sus correspondientes eventos y una id única basada en el nombre de la tarea sin espacios, con lo que facilitamos la gestión de cada tarea.
* **click al eliminar una tarea**: evento añadido cuando se dibuja una tarea en el dom y que elimina la tarea del listado al que pertenezca y además actualiza la vista del dom.
* **click al mover una tarea**: evento añadido cuando se dibuja una tarea en el dom y que mueve la tarea de la lista de tareas a relizar a la lista de tareas realizadas o viceversa y además actualiza la vista del dom.



