"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(string){
    if(string === "blue") {
        return "Blue is the color of the sky.";
    } else if (string === "red"){
        return "Strawberries are red.";
    } else if (string === "cyan"){
        return "I don't know anything about cyan.";
    } else {
        return "That is not one of my colors!";
    }
}
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("brown"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch(string){
    switch(string) {
        case "blue":
            return "Switch: Blue is the color of the sky.";
            break;
        case "red":
            return "Switch: Strawberries are red.";
            break;
        case "cyan":
            return "Switch: I don't know anything about cyan.";
            break;
        default:
            return "Switch: That was not one of my colors.";
            break;
    }
}
console.log(analyzeColorSwitch("blue"));
console.log(analyzeColorSwitch("red"));
console.log(analyzeColorSwitch("cyan"));
console.log(analyzeColorSwitch("olive"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("What is your favorite color?");
alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(number, total){
    if(number == 0) {
        return total;
    } else if (number == 1) {
        return total - (total * .10);
    } else if (number == 2) {
        return total - (total * .25);
    } else if (number == 3) {
        return total - (total * .35);
    } else if (number == 4) {
        return total - (total * .50);
    } else if (number == 5) {
        return "free";
    } else {
        return "You didn't enter a valid number";
    }
}
calculateTotal();


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userTotal = prompt("What was your bill total?");
alert("Your lucky number is " + luckyNumber);
alert("your price before the discount was $" + userTotal + " Your price after the discount is $" + calculateTotal(luckyNumber, userTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function mathQuestions () {
    var confirmation = confirm("Would you like to enter a number? Click ok for yes.");
    if (confirmation === true) {
        var number = prompt("Enter a number.");
        var newNum = parseInt(number, 10);
        var plusHundred = newNum + 100;
        if (isNaN(number)) {
            alert("that's not a number");
        } else if (number % 2 === 0) {
            alert("your number is even");
            alert("your number plus 100 is " + plusHundred);
        } else {
            alert("your number is odd");
            alert("your number plus 100 is " + plusHundred);
        }
        if (number > 0) {
            alert("your number is positive");
        } else if (number < 0) {
            alert("your number is negative");
        }
    } else {
        alert("goodbye, have a nice day!")
    }
}
mathQuestions ()

let number = 20;
var display = function (){
    console.log(number);
    // let number = 10;
}
display();