console.log("Welcome to functions. Functions are objects");
//example of function declaration.
function sayHello() {
    console.log("Hello, I'm a function declaration");
}
    sayHello();   //this is called calling or invoking the function.

//another function declaration
function greet(){
    console.log("Hello there! I'm also a function declaration")
}
    greet();

//example of function expression. is when the function is stored inside a variable.
const speak = function(){
    console.log("Good Day, I'm a function expression!")
};   //you put a semicolon at the end of an expression
    speak()

/*one difference between a declaration and expression is in hoisting.
* A function declaration is hoisted to the top of the file.
* i.e. if you put the call then the function declaration, it will still work.
*/

const calcArea = function(radius){
    let area = 3.14 * radius**2;   //the area of a circle is pi * r squared.
    return area;
}
const area = calcArea(5);
console.log(area);


function add(a, b) {
    return a + b;
}
console.log(add(2, 3));


//function challenge 1.
function returnTwo(x) {
    return 2;
}
console.log(returnTwo());

//function challenge 2.
var sayHowdy = function () {
    console.log('Howdy!');
}

sayHowdy();

//function challenge 3.
function returnName(){
    console.log("Mary");
}
returnName();

var myName = function(){
    console.log("My name is Mary")
};
myName()

//function challenge 4
function addThree(number){
    return number + 3;
}
console.log(addThree(5))

//function challenge 5
function sayString(string){
    return string;
}
console.log("codeup")
console.log("string")

/* Write a function called identity(input) that takes in an
* argument called input and returns that input.
 */
function identity(input){
    return input;
}

//math.random is a function that generates a number between 0 & 1, not including 1.
console.log("This is a random number " + Math.random());

/* math.floor is a function that returns the
largest integer less than or equal to a given number.
 */
console.log("This is an example of Math.floor " + Math.floor(5.1));


/* Write a function called getRandomNumber(min, max)
that returns a random number between min and max values sent
to that function call.
 */
//this one produces a whole number
function getRandomNumber(min, max){
    var random = Math.floor((Math.random() * max) + min);
    return random;
}

//generate a random number between 2 values.
//this one produces a long decimal
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

