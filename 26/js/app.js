"use strict";

/*** JQuery ***/
$(document).ready(() => {
    let urlCurrent = "https://swapi.dev/api/people";
    let urlNext = null;
    let urlBack = null;

    requestData(urlCurrent);

    $("#btnNext").on({
        click: function () {
            requestData(urlNext);
        }
    })

    $("#btnBack").on({
        click: function () {
            requestData(urlBack);
        }
    })

    function requestData(url) {
        urlCurrent = url;

        $.ajax({
            method: "GET",
            url: urlCurrent,
            success: function (data) {
                urlNext = data.next;
                urlBack = data.previous;

                drawPeople(data);
                checkButtons();
            },
            error: function (error) {
                console.log("error al obtener datos");
                console.log(error);
            }
        })
    }

    function drawPeople(datos) {
        $("#numberPeople").html(datos.count);
        $("#gridPeople").empty();

        for (let i = 0; i < datos.results.length; i++) {
            const nodePeople = $("<div></div>")
                .addClass("people")
                .html(datos.results[i].name);

            $("#gridPeople").append(nodePeople);
        }
    }

    function checkButtons() {
        if (urlBack) {
            $("#btnBack").prop("disabled", false);
        } else {
            $("#btnBack").prop("disabled", true);
        }

        if (urlNext) {
            $("#btnNext").prop("disabled", false);
        } else {
            $("#btnNext").prop("disabled", true);
        }
    }
})