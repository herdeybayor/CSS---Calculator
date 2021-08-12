// Button Click Event
$(".btn").click(function () {
    var displayText = $(".display").text();
    var newText = $(this).text();
    $(".display").text(displayText + newText);
})

// KeyPress Event
$(document).keypress(function (event) {
    var a = true;
    var b = isNaN(event.key);
    if (event.key == "Enter") {
        $(".display").text(eval($(".display").text()));
    }
    else if(event.key == "*"){
        var displayText = $(".display").text();
        $(".display").text(displayText + event.key.replace("*", "\u00d7"));
    }
    else if (event.key == "*" || event.key == "/" || event.key == "-" || event.key == "+") {
        var displayText = $(".display").text();
        $(".display").text(displayText + event.key);
    } else if (a !== b) {
        var displayText = $(".display").text();
        $(".display").text(displayText + event.key);
    } else {
        console.log(event.key);
    }
})

// AC click Button
$(".ac").click(() => {
    var displayText = $(".display").text();
    $(".display").text("");
})

// Equal Button
$(".equal").click(() => {
    var result = $(".display").text().replace("\u00d7", "*");
    $(".display").text(eval(result));
})