"use strict";

/*** JQuery ***/
$(document).ready(() => {
    const taskManager = {

        // properties
        taskToDoList: [],
        taskDoneList: [],

        // methods
        taskToDoLength() { return this.taskToDoList.length },
        taskDoneLength() { return this.taskDoneList.length },
        addTaskToDo(taskName) { this.taskToDoList.push(taskName) },
        addTaskDone(taskName) { this.taskDoneList.push(taskName) },
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
        checkNewTask(taskName) {
            if (!this.taskToDoList.includes(taskName) && !this.taskDoneList.includes(taskName)) {
                return true;
            } else {
                alert(`La tarea '${taskName}' ya existe`);
                return false;
            }
        },
    }


    // event to add a new ToDo Task to the list and draw DOM
    $("#addTask").on({
        click: () => {
            const taskName = $("#taskName").val();

            if (taskManager.checkNewTask(taskName)) {

                taskManager.addTaskToDo(taskName);
                drawTaskToDo(taskName);
                $("#taskName").val("Introducir una actividad");
            }
        }
    })


    // function to draw a new ToDo Task node
    function drawTaskToDo(taskName) {
        const taskId = taskName.replace(/\s/g, "");

        const nodeTaskToDo =
            $("<div></div>")
                .attr("id", taskId)
                .addClass("task-todo__task");

        const nodeSpanTask =
            $("<span></span>")
                .addClass("task-todo__task-text")
                .html(taskName);

        const nodeSpanRemove =
            $("<button>")
                .addClass("removeTask task-todo__task-remove far fa-trash-alt");

        const nodeSpanAdd =
            $("<button>")
                .addClass("nextTask task-todo__task-add far fa-check-circle");

        nodeTaskToDo
            .append(nodeSpanTask)
            .append(nodeSpanRemove)
            .append(nodeSpanAdd);

        $(".task__todo").append(nodeTaskToDo);


        // event to move a task from the ToDo list to the Done list and draw DOM
        $(".nextTask").on({
            click: () => {
                const taskName = $("#taskName").val();

                emptyTask(taskName);
                taskManager.removeTaskToDo(taskName);

                taskManager.addTaskDone(taskName);
                drawTaskDone(taskName);
            }
        })


        // event to remove a task from the ToDo list and draw DOM
        $(".removeTask").on({
            click: function () {
                const taskId = $(this).parent().attr("id");
                const taskName = $(this).parent().text();
                console.log(taskId);
                console.log(taskName);
                emptyTask(taskId);
                taskManager.removeTaskToDo(taskName);
            }
        })
    }


    // function to draw a new Done Task node
    function drawTaskDone(taskName) {
        const taskId = taskName.replace(/\s/g, "");

        const nodeTaskDone =
            $("<div></div>")
                .attr("id", taskId)
                .addClass("task-done__task");

        const nodeSpanTask =
            $("<span></span>")
                .addClass("task-done__task-text")
                .html(taskName);

        const nodeSpanRemove =
            $("<button>")
                .addClass("removeTask task-done__task-remove far fa-trash-alt");

        const nodeSpanAdd =
            $("<button>")
                .addClass("backTask task-done__task-add far fa-check-circle");

        nodeTaskDone
            .append(nodeSpanTask)
            .append(nodeSpanRemove)
            .append(nodeSpanAdd);

        $(".task__done").append(nodeTaskDone);


        // event to move a task from the Done list to the ToDo list and draw DOM
        $(".backTask").on({
            click: () => {
                const taskName = $("#taskName").val();

                emptyTask(taskName);
                taskManager.removeTaskDone(taskName);

                taskManager.addTaskToDo(taskName);
                drawTaskToDo(taskName);
            }
        })
    }


    // function to empty from dom a ToDo Task node
    function emptyTask(taskName) {
        $(`#${taskName}`).remove();
    }
})