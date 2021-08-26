"use strict"

//write a function that turns a word to upper case

const name = "Get Out";     //this is a global variable, available outside the function

function toUpper(text){     //this is our function declaration
    const upperCased = text.toUpperCase();     //we assigned a new variable inside the function
    console.log(upperCased);
}

toUpper(name);            //we are calling the function with the global variable name passed in
toUpper("help")      //we are calling the function with a string typed in.



//write a function that turns a word into lower case

function toLower(text){              //here we declared our function
    const lowerCased = text.toLowerCase();   //here we created a new variable
    console.log(lowerCased);
}
toLower("QUIET PLEASE");       //here we call our function with a string typed in
toLower("STOP SHOUTING");

console.log("-----------");

//examples from W3 schools javascript exercises

//create a variable called carName and assign the value Volvo to it
var carName = "Volvo";

//create a variable named z and assign the value 50 to it
var z = 50;

console.log("display the sum of 5 + 10, using 2 variables x & y");
var x = 5;
var y = 10
console.log(x + y);

//create a variable q, assign x + y to it, and display the result. Remember to use var (or const or let) when declaring a variable
var z = x + y;
console.log("z " + z);

//on a single line, declare 3 variables firstName John, lastName Doe, age 35. Remember to put commas bw each var
var firstName = "John", lastName = "Doe", age = 35;

//multiply 10 by 5 and alert the result
//alert("10 x 5 is " + 10 * 5);

//reminder exponents x**2, multiplication *, division /, addition +, substraction -, modulus % gives a remainder
//assignment operators: x = x + 1 is the same as x += 1. x = x * y is the same as x *= y.

//use the correct assignment operator that will result in d being 15 (d = d + f)
var d = 10;
var f = 5;
d += f;
//d = d + f is the same as d+=f
console.log("d+=f: " + d);

//javascript data types: number, string, boolean, undefined, null, object, array
//how do you execute a function? you call it using it's name and (), like myFunction()
//write a function function myFunction(){ alert("Hello World") }

//Strings: use the length property to alert the length of txt below
console.log("use the string length property. Length includes spaces")
let txt = "Hello World";
let len = txt.length
//alert(len);
console.log(len);

//Strings: find the position of the character h in the string below. remember to use quotes inside "" indexOf("")
let txtBe = "abcdefghijklmn";
let pos = txtBe.indexOf("h");
console.log(pos);

//Strings: use slice to return the word bananas from the string below. remember to use the start, and then 1 after the end.
let txtNe = "I can eat bananas all day";
let nextXx = txtNe.slice(10, 17);     //declare a new variable here and then you can console log your variable
console.log("use slice: " + nextXx);

//Strings: use a string method to replace a word (the word you want to replace, the  replacement)
let txtNex = "Hello World";
txtNex = txtNex.replace("Hello", "Welcome");
console.log(txtNex);


//Condtions: write an if statement to alert Hello World is x > y
//proper format of an if statement if(conditions here){action here}
   //if(x > y) {
   //    alert("Hello World!!!");
   //}

//now add an else statement to the code above to alert Goodbye
   //if(x > y) {
   //    alert("Hello World!!!");
   //} else {
   //    alert("Goodbye!!!");
   //}

//from second assessment
function increment(input){
   // if(typeof input === "number"){
        var input2 = parseInt(input, 10);  //parseInt should convert string to integer
        return input2 += 1;
   // } else {
   //     return false
    }
//}

//this solution seems to work...if you enter "10"
function incrementBb (input) {
    var result = parseInt(input) + 1;
    return result;
}

function decrement(input){
    if(typeof input === "number"){
        return input -= 1;
    } else {
        return false;
    }
}

function multiply (num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        var result = parseInt(num1) * parseInt(num2);
        return result;
    } else if (typeof num1 === "string" && typeof num2 === "string") {
        return false;
    } else {
        return false;
    }
}








