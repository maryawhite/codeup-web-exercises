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
    var random = Math.floor((Math.random() * 180) + 20);

    if(random % 2 === 0){
        console.log(random + " is even")
    } else {
        console.log(random + " is odd");
    }
}

//create a pyramid 1 22 333, etc
function oneOneTwoTwos() {
    for (var i = 1; i < 10; i = i + 1) {
        console.log(i.toString().repeat(i));
    }
}

//my first attempt that doesn't work.
// for(var i = 0; i <= 7; i++){
//   for(var j = 0; j < i; j++){
//       console.log(i);
//   }
// console.log("this is j " + j);
//}

//count down by 5's
for(var i = 100; i >= 5; i = i - 5){
    console.log(i);
}