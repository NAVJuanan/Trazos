$("#opener").on({
    click: function () {
        $("#dialog").dialog("open");
    }
});

$("#dialog").dialog({
    autoOpen: false,
    dialogClass: "no-close",
    buttons: [
        {
            text: "OK",
            click: function () {
                $(this).dialog("close");
            }
        }
    ]
});

// drag an item
$(".cuadrado").draggable({
    cursor: "move",
    revert: true,
    start: function () {
        console.log("comienza arrastre de elemento");
    },
    stop: function () {
        console.log("finaliza arrastre de elemento");
    }
});

// drop an item
counter = 0;
$("#dropElement").droppable({
    accept: ".blue",
    tolerance: "fit",
    drop: function (event, ui) {
        counter++;
        console.log("elemento soltado", counter);
        ui.draggable.draggable({
            revert: false
        })
    },
    out: function (event, ui) {
        counter--;
        console.log("elemento sacado", counter);
    }
});