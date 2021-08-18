"use strict";
var userEntry = prompt("Enter an odd number between 1 & 50.");
while(true){
    if(userEntry % 2 != 0 && (userEntry >= 1 && userEntry <= 50)) {
        break;
    }
    userEntry = prompt("Enter an odd number between 1 & 50");
}

//Use a loop and the continue statement to output all
// the odd numbers between 1 and 50, except for the number the user entered.

console.log("the user number to skip is " + userEntry);

for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
        if (i == userEntry) {     //I think parseInt would make this code better
            console.log("skipping this one: " + userEntry);
            continue;
        } else {
        console.log("here's an odd number " + i)
    }
}
