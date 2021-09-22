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


//Write a program to check two numbers and return true if one of the numbers is 100
//or if the sum of the two numbers is 100

function checkNums(a, b){
    var y = 100;
    var result = a + b;
    if(a === 100 || b === 100) {
        return true;
    }
    if (result === y){
        return true;
    }
}
console.log(checkNums(100, 0));    //true
console.log(checkNums(50, 50));    //true
console.log(checkNums(90, 10));    //true
console.log(checkNums(0, 0));      //undefined
console.log(checkNums(101, 101));  //undefined
console.log(checkNums(100, 100));  //true
console.log(checkNums(101, -1));   //true


function isEqualTo100(a, b){
    if (a === 100 || b === 100 || (a + b) === 100){
        return true
    }
}
console.log("---");
console.log(isEqualTo100(50, 50));

//write a program to get the extension of a filename
var getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html"));
//using slice with one element, will give that element to the end, so this will
//output .html bc it gives you everything after the .

function getFileExt(string){
    var output = string.slice(string.lastIndexOf("."));
    return output;
}
console.log(getFileExt("index.js"));

function secretCode(string){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    string = string.split("");
    for(var i = 0; i < string.length; i++){
        var code = string + alphabet[i]
    }
    return code;
}
console.log(secretCode("Mary")); //M,a,r,yd

//String.fromCharCode
//charCodeAt

const moveCharsForward = (str) =>
    str.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

console.log(moveCharsForward("ABC"));
console.log(moveCharsForward("Mary"));

//writ a javascript program to get the current date
//expected mm-dd-yyyy

const formatDate = (date = new Date()) => {
    const months = date.getMonth() + 1;
    const days = date.getDate() + 1;
    const years = date.getFullYear();
    return `${months}/${days}/${years}`;
}
console.log("this is not today's date " + formatDate()); //adding a day? index 0 is Jan.


//in class warmup 9-22-21
//write a function named logNum() that will accept a number parameter indicating the number
//of times to LOG numbers up to what was provided. LogNum will let me know whether
//or not the number that we are iterating through is even or odd

function logNum(input){
    for(var i = 0; i <= input; i++){    //don't use input.length, just input
        if(i % 2 === 0){
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}

console.log(logNum(10));

function oddOrEvenW (input){
    for(var i = 0; i <= input; i++){
        if (i % 2 === 0){
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}
console.log(oddOrEvenW(4));






