"use strict";
//create a function that accepts a number and console.logs
// the multiplication table for that number

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}
showMultiplicationTable(7);

//use a for loop to generate 10 random numbers between 20 and 200
//and output whether each number is odd or even. i.e 123 is odd
//Note to self, random is generating numbers larger than 200...
    for(var i = 0; i < 10; i++){
    var random = Math.floor((Math.random() * 200) + 20);

    if(random % 2 === 0){
        console.log(random + " is even")
    } else {
        console.log(random + " is odd");
    }
}

//create a pyramid 1 22 333, etc
for (var i = "A"; i.length < 8; i = i + "A") {
    console.log("this is tricky " + i);
}