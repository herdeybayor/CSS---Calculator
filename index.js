$(".btn").click(function() {
    var displayText = $(".display").text();
    var newText = $(this).text();
    $(".display").text(displayText + newText);
})

$(document).keypress


$(".ac").click(() => {
    var displayText = $(".display").text();
    $(".display").text("");
})

$(".equal").click(()=>{
    var result = $(".display").text();
    $(".display").text(eval($(".display").text()));
})