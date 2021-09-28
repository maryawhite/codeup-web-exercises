"use strict"

$(document).ready(function() {
//your code should be inside the document ready function
$("body").css("padding", "1em");
$("#note-to-self").css("border","1px solid red").css("color", "darkgrey");
$("li").css("font-size", "20px");
$(".codeup").css("background-color","yellow");
var tagline = $("#tagline").html();
    alert(tagline);

// $("img").css("width", "50%").css("margin-left", "auto").css("margin-right", "auto").css("display", "block");
$("img").hover(function() {
    $(this).attr('src','/img/dinosaur.jpg').css("width", "50%").css("margin-left", "auto").css("margin-right", "auto").css("display", "block");
    },
    function(){
    $(this).attr('src','/img/forest.jpg').css("width", "50%").css("margin-left", "auto").css("margin-right", "auto").css("display", "block");

});

//change the bg color of the h1 when clicked
    $("h1").click(function(){
        $(this).css("background-color", "black").css("color","red");
    });

    //make all p have a font size of 18 when dbl clicked
    $("p").dblclick(function(){
        $(this).css("font-size", "18px");
    })

    $("li").hover(function(){
        $(this).css("background-color", "black").css("color","red");
        },
        function(){
        $(this).css("background-color", "inherit").css("color", "inherit");
    });


});
