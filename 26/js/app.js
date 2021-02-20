"use strict";

/*** JQuery ***/
$(document).ready(() => {
    let urlCurrent = "https://swapi.dev/api/people";
    let urlNext = null;
    let urlBack = null;

    //requestDataJS(urlCurrent);
    requestDataJQuery(urlCurrent);

    $("#btnNext").on({
        click: function () {
            //requestDataJS(urlNext);
            requestDataJQuery(urlNext);
        }
    })

    $("#btnBack").on({
        click: function () {
            //requestDataJS(urlBack);
            requestDataJQuery(urlBack);
        }
    })

    // request JQuery
    function requestDataJQuery(url) {
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
                console.error(error);
            }
        })
    }

    // request JavaScript
    function requestDataJS(url) {
        urlCurrent = url;

        const httpRequest = new XMLHttpRequest();
        httpRequest.open("GET", urlCurrent, true);
        httpRequest.onreadystatechange = function (event) {
            if (this.readyState == 4 && this.status == 200) {
                // convierte un Json a objeto
                const httpResponse = JSON.parse(this.responseText);

                urlNext = httpResponse.next;
                urlBack = httpResponse.previous;

                drawPeople(httpResponse);
                checkButtons();

                // convierte un objeto a Json
                //const jsonFormat = JSON.stringify(httpResponse);
            }
        }
        httpRequest.onerror = function (error) {
            console.log("error al obtener datos");
            console.error(error);
        }
        httpRequest.send();
    }

    function requestPersonJS(url) {
        $.ajax({
            method: "GET",
            url: url,
            success: function (data) {
                console.log("dato de persona");
                console.log(data);
            },
            error: function (error) {
                console.log("error al obtener persona");
                console.error(error);
            }
        })
    }

    function drawPeople(datos) {
        $("#numberPeople").html(datos.count);
        $("#gridPeople").empty();

        for (let dato of datos.results) {
            const nodePeople =
                $("<div></div>")
                    .addClass("people")
                    .html(dato.name)
                    .on({ click: () => requestPersonJS(dato.url) })

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