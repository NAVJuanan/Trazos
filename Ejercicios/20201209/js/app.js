$("#emailTo").focus(function () {
    $("#emailToLabel").addClass("label--focus");
});

$("#emailTo").focusout(function () {
    $("#emailToLabel").removeClass("label--focus");
});

$("#emailFrom").focus(function () {
    $("#emailFromLabel").addClass("label--focus");
});

$("#emailFrom").focusout(function () {
    $("#emailFromLabel").removeClass("label--focus");
});

$("#areaComments").focus(function () {
    $("#areaCommentsLabel").addClass("label--focus");
});

$("#areaComments").focusout(function () {
    $("#areaCommentsLabel").removeClass("label--focus");
});