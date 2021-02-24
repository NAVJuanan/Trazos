"use strict";

/*** JQuery ***/
$(document).ready(() => {

    console.log("cargando JQuery");

    const taskManager = {

        // properties
        taskToDoList: [],
        taskDoneList: [],

        // methods
        taskToDoLength() { return this.taskToDoList.length },
        taskDoneLength() { return this.taskDoneList.length },
        getLastTaskToDo() { return this.taskToDoList[this.taskToDoLength() - 1] },
        getLastTaskDone() { return this.taskDoneList[this.taskDoneLength() - 1] },
        addTaskToDo(taskName) { this.taskToDoList.push(taskName) },
        addTaskDone(taskName) { this.taskDoneList.push(taskName) },
        removeTaskToDo() { this.taskToDoList.pop() },
        removeTaskDone() { this.taskDoneList.pop() }
    }

    console.log(taskManager);


    // event to add a new ToDo Task to the list and draw DOM
    $("#addTask").on({
        click: () => {
            taskManager.addTaskToDo($("#taskName").val());
            drawTaskToDo(taskManager.getLastTaskToDo());
        }
    })


    // function to draw a new ToDo Task node
    function drawTaskToDo(taskName) {

        const nodeTaskToDo =
            $("<div></div>")
                .addClass("task-todo__task");

        const nodeSpanTask =
            $("<span></span>")
                .addClass("task-todo__task-text")
                .html(taskName);

        const nodeSpanRemove =
            $("<span></span>")
                .addClass("task-todo__task-remove far fa-trash-alt");

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
                console.log("click next");
                taskManager.addTaskDone($("#taskName").val());
                drawTaskDone(taskManager.getLastTaskDone());
            }
        })
    }


    // function to draw a new Done Task node
    function drawTaskDone(taskName) {

        const nodeTaskDone =
            $("<div></div>")
                .addClass("task-done__task");

        const nodeSpanTask =
            $("<span></span>")
                .addClass("task-done__task-text")
                .html(taskName);

        const nodeSpanRemove =
            $("<span></span>")
                .addClass("task-done__task-remove far fa-trash-alt");

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
                console.log("click back");
                taskManager.addTaskToDo($("#taskName").val());
                drawTaskToDo(taskManager.getLastTaskToDo());
            }
        })
    }
})