"use strict";

/*** JQuery ***/
$(document).ready(() => {
    const taskManager = {

        // properties
        taskToDoList: [],
        taskDoneList: [],

        // methods
        addTaskToDo(taskName) {
            if (!this.taskToDoList.includes(taskName)) {
                this.taskToDoList.push(taskName)
            }
        },
        addTaskDone(taskName) {
            if (!this.taskDoneList.includes(taskName)) {
                this.taskDoneList.push(taskName)
            }
        },
        checkNewTask(taskName) {
            if (taskName !== "") {
                if (!this.taskToDoList.includes(taskName) && !this.taskDoneList.includes(taskName)) {
                    return true;
                } else {
                    alert(`La tarea '${taskName}' ya existe`);
                    return false;
                }
            } else {
                alert("La tarea no es válida");
                return false;
            }
        },
        removeTaskToDo(taskName) {
            const index = this.taskToDoList.indexOf(taskName);
            if (index >= 0) {
                this.taskToDoList.splice(index, 1);
            }
        },
        removeTaskDone(taskName) {
            const index = this.taskDoneList.indexOf(taskName);
            if (index >= 0) {
                this.taskDoneList.splice(index, 1);
            }
        },
    }


    // load local storage
    getLocalStorage();


    // event to add a new ToDo Task to the list and draw DOM
    $("#addTask").on({
        click: () => {
            const taskName = $("#taskName").val();

            if (taskManager.checkNewTask(taskName)) {

                taskManager.addTaskToDo(taskName);
                drawTaskToDo(taskName);
                $("#taskName").val("");
            }
        }
    })


    // function to draw a new ToDo Task node
    function drawTaskToDo(taskName, updateLocalStorage = true) {
        const taskId = taskName.replace(/\s/g, "");

        const nodeTaskToDo =
            $("<div></div>")
                .attr("id", taskId)
                .addClass("task__div");

        const nodeSpanTask =
            $("<span></span>")
                .addClass("task__text")
                .html(taskName);

        const nodeSpanRemove =
            $("<button>")
                .addClass("task__remove far fa-trash-alt");

        const nodeSpanAdd =
            $("<button>")
                .addClass("task__next task-todo__task-add far fa-check-circle");

        nodeTaskToDo
            .append(nodeSpanTask)
            .append(nodeSpanRemove)
            .append(nodeSpanAdd);

        $(".task__todo").append(nodeTaskToDo);


        if (updateLocalStorage) {
            setLocalStorage();
        }


        // event to remove a task from the ToDo list and draw DOM
        $(".task__remove").on({
            click: function () {
                const taskId = $(this).parent().attr("id");
                const taskName = $(this).parent().text();

                $(`#${taskId}`).remove();
                taskManager.removeTaskToDo(taskName);

                setLocalStorage();
            }
        })


        // event to move a task from the ToDo list to the Done list and draw DOM
        $(".task__next").on({
            click: function () {
                const taskId = $(this).parent().attr("id");
                const taskName = $(this).parent().text();
                console.log(taskName, taskManager.taskToDoList.length);
                console.log("el otro", taskManager.taskDoneList.length);
                $(`#${taskId}`).remove();
                taskManager.removeTaskToDo(taskName);
                console.log(taskName, taskManager.taskToDoList.length);
                console.log("el otro", taskManager.taskDoneList.length);
                taskManager.addTaskDone(taskName);
                console.log(taskName, taskManager.taskToDoList.length);
                console.log("el otro", taskManager.taskDoneList.length);
                drawTaskDone(taskName);
            }
        })
    }


    // function to draw a new Done Task node
    function drawTaskDone(taskName, updateLocalStorage = true) {
        const taskId = taskName.replace(/\s/g, "");

        const nodeTaskDone =
            $("<div></div>")
                .attr("id", taskId)
                .addClass("task__div");

        const nodeSpanTask =
            $("<span></span>")
                .addClass("task__text task__text-done")
                .html(taskName);

        const nodeSpanRemove =
            $("<button>")
                .addClass("task__remove far fa-trash-alt");

        const nodeSpanAdd =
            $("<button>")
                .addClass("task__back task-done__task-add far fa-check-circle");

        nodeTaskDone
            .append(nodeSpanTask)
            .append(nodeSpanRemove)
            .append(nodeSpanAdd);

        $(".task__done").append(nodeTaskDone);


        if (updateLocalStorage) {
            setLocalStorage();
        }


        // event to remove a task from the Done list and draw DOM
        $(".task__remove").on({
            click: function () {
                const taskId = $(this).parent().attr("id");
                const taskName = $(this).parent().text();

                $(`#${taskId}`).remove();
                taskManager.removeTaskDone(taskName);

                setLocalStorage();
            }
        })


        // event to move a task from the Done list to the ToDo list and draw DOM
        $(".task__back").on({
            click: function () {
                const taskId = $(this).parent().attr("id");
                const taskName = $(this).parent().text();
                console.log(taskName, taskManager.taskDoneList.length);
                console.log("el otro", taskManager.taskToDoList.length);
                $(`#${taskId}`).remove();
                taskManager.removeTaskDone(taskName);
                console.log(taskName, taskManager.taskDoneList.length);
                console.log("el otro", taskManager.taskToDoList.length);
                taskManager.addTaskToDo(taskName);
                console.log(taskName, taskManager.taskDoneList.length);
                console.log("el otro", taskManager.taskToDoList.length);
                drawTaskToDo(taskName);
            }
        })
    }


    // function to get local storage data, load lists & draw
    function getLocalStorage() {

        if (JSON.parse(localStorage.getItem("listTasksToDo"))) {
            const taskToDoNames = JSON.parse(localStorage.getItem("listTasksToDo"));
            console.log(taskToDoNames);
            for (let taskName of taskToDoNames) {
                taskManager.addTaskToDo(taskName);
                drawTaskToDo(taskName, false);
            }
        }

        if (JSON.parse(localStorage.getItem("listTasksDone"))) {
            const taskDoneNames = JSON.parse(localStorage.getItem("listTasksDone"));
            console.log(taskDoneNames);
            for (let taskName of taskDoneNames) {
                taskManager.addTaskDone(taskName);
                drawTaskDone(taskName, false);
            }
        }
    }


    // function to set local storage data
    function setLocalStorage() {
        localStorage.setItem("listTasksToDo", JSON.stringify(taskManager.taskToDoList));
        localStorage.setItem("listTasksDone", JSON.stringify(taskManager.taskDoneList));
    }
})