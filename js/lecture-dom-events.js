var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var buttonC = document.getElementById('jsstyle');

// button1.addEventListener('click', function(){
//     // alert("Hello Quasar");
//     var listItems = document.getElementsByTagName("li")
//     for(var i = 0; i < listItems.length; i++){
//         listItems[i].style.backgroundColor = "rebeccapurple"; //this changes all li including the ones in the nav
//         listItems[i].style.color = "white";
//     }
// })

var rebeccaPurple = function (){
    var listItems = document.getElementsByTagName("li")
    for(var i = 0; i < listItems.length; i++) {
        listItems[i].style.backgroundColor = "rebeccapurple"; //this changes all li including the ones in the nav
        listItems[i].style.color = "white";
    }
}

button1.addEventListener('click', rebeccaPurple)

button2.addEventListener('click', function(){
    button1.removeEventListener('click', rebeccaPurple)
})

var style = function(){
    var leftPara = document.getElementById("changeStyle");
    leftPara.style.color = "red";
    leftPara.style.fontFamily = "Comic Sans MS";

}
buttonC.addEventListener('click', style);
