"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?");
alert(userInput + " is my favorite color too!");

//TODO: complete exercise 3 from the previous lesson.

var mermaid = prompt("How many days do you want to rent The Little Mermaid?");
alert("you said " + mermaid + " days");

var bear = prompt("How many days do you want to rent Brother Bear?");
alert("you said " + bear + " days");

var hercules = prompt("How many days do you want to rent Hercules?");
alert("you said " + hercules + " days");

alert("your total is $" + (mermaid * 3 + bear * 3 + hercules * 3));

var hoursGoogle = prompt("How many hours did you work for Google this week?");
alert("you said " + hoursGoogle + " hours");

var hoursAmazon = prompt("How many hours did you work for Amazon this week?");
alert("you said " + hoursAmazon + " hours");

var hoursFacebook = prompt("How many hours did you work for Facebook this week?");
alert("you said " + hoursFacebook + " hours");

alert("your total salary for the week is $" + (hoursGoogle * 400 + hoursAmazon * 380 + hoursFacebook * 350));

var notFull = confirm("Are there seats available in the class. Click ok for yes.");
alert("you entered: " + notFull);

var noConflict = confirm("Is the day and time open on your schedule?");
alert("you entered: " + noConflict);

//a product offer can be applied only if a person buys 2 or more items
//and the offer has not expired.
//premium members do not need to buy a specific amt of products

var moreThanTwo = confirm("Are you buying 2 or more items? Click ok for yes."); //I could have used prompt here
alert("you entered: " + moreThanTwo);

var notExpired = confirm("Is today prior to the expiration date of the offer?");
alert("you entered: " + notExpired);

var premiumMember = confirm("Are you a premium member?");
alert("you entered: " + premiumMember);

alert("The user meets the requirements for the offer: " + ((moreThanTwo || premiumMember) && notExpired));


//alternate solution without using confirm 8/16/21
var productQuantity = 4;
var offerValid = false;
var isPremiumMem = true;

console.log((productQuantity >2 || isPremiumMem) && offerValid);


