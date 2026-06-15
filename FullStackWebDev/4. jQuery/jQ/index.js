$("button").click(function () {
    $("h1").css("color", "purple");
});

$(document).keypress(function (e) {
    $("h1").text(e.key);
});

$("h1").on("mouseover", function (){
    $("h1").css("color", "black");
});

$("button").on("click", function (){
    $("h1").toggle();
});

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});