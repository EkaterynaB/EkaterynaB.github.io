$(function() {

    $("<div>", {
        id: "wrapper"
    }).appendTo("body");

    $("<form>").appendTo("#wrapper");
    $("<fieldset>").css("display", "inline-block").appendTo("form");

    function addInput(classDiv, inputId, textlabel) {
        $("<div>").addClass(classDiv).appendTo("fieldset");
        $("<label>", {
            for: inputId,
            text: textlabel
        }).css({
            "width": "100px",
            "display": "inline-block"
        }).appendTo("div ." + classDiv);

        $("<input>", {
            id: inputId,
            type: "text",
        }).appendTo("div ." + classDiv);

        $("<p>", {
            class: classDiv+"tooltip",
            text: "Please provide your " + inputId
        }).css ({
            "display": "inline-block",
            "opacity": "0"
        }).appendTo("div ." + classDiv);

    }

    addInput("first", "firstname", "Firstname");
    addInput("second", "lastname", "Lastname");
    addInput("third", "address", "Address");

    $("<button>", {
        text: "Show help"
    }).appendTo("#wrapper").click(function() {
        $("p").animate({opacity: "1"}, 1500);

    });

    $("input").hover(function() {
        $(this).next().animate({opacity: "1"}, 500);
    }, function() {
        $(this).next().animate({opacity: "0"}, 500);
    });
})
