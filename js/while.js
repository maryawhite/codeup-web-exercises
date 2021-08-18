"use strict";
var i = 1;
while (i < 65536) {
    i = i * 2
    console.log(i);
}

//ice cream cone question will be here
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("beginning number: I have " + allCones + " cones")
do{
    var customerOrder = Math.floor(Math.random() * 5) + 1;
    console.log("customer number is " + customerOrder)
    if(allCones >= customerOrder) {
        allCones = allCones - customerOrder; //subtract customerOrder from allCones and store it in the same variable.
    } else {
        console.log("sorry, " + customerOrder + " is greater than " + allCones + " no cone for you!");
    }

    console.log("new number of cones left " + allCones)

} while(allCones > 0);
    if(allCones === 0){
        console.log("yay I sold them all!!!");
    }