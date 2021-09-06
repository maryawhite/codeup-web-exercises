// Define a function named timesFour that takes in an input and multiples
// that input by four if it is numeric. If the input is not numeric, then return false.

function timesFour(input){
    if(Array.isArray(input)){   //how to check if your input is an array
        return false;
    }
    if(!isNaN(parseFloat(input))){
        return input * 4;
    }
    return false;
}

// console.log(timesFour(0));
// console.log(timesFour("5"));
// console.log(timesFour(-5));       //-20
// console.log(timesFour("Texas")); //false
// console.log(timesFour([2,1,0])); //false
// console.log(timesFour(true));   //false
// console.log(timesFour(null));   //false
// console.log(timesFour({}));


// Define a function named convertDaystoHours that takes in one input Days.
// Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

function convertDaystoHours(input){
    if(Array.isArray(input) || isNaN(parseFloat(input))){ //checking if it's an array or not numeric
        return false;
    }
        return input * 24;
}
// console.log("--convert days to hours--");
// console.log(convertDaystoHours(0)); //0
// console.log(convertDaystoHours('5')); // 120
// console.log(convertDaystoHours('Texas')); //false
// console.log(convertDaystoHours([2, 1, 0])); //false
// console.log(convertDaystoHours(true)); //false
// console.log(convertDaystoHours(false)); //false



// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.

function calculateTax(totPaid, taxPercent){
    var total = false;    //initialize it to false
    if(Array.isArray(totPaid) || Array.isArray(taxPercent)){
        return false;
    }
    if(!isNaN(parseFloat(totPaid)) && !isNaN(parseFloat(taxPercent))){
        var result = totPaid * taxPercent/100;
        total = result + totPaid;              //reassign the variable
        total = "$" + total.toFixed(2);  //reassign the variable
    }
    return total;
}
// console.log("--calculate tax--");
// console.log(calculateTax(25, 8));				 // “$27.00"
// console.log(calculateTax(10, 12));            // “$11.20”
// console.log(calculateTax(120, 15.5));			 //	“$138.60"
// console.log(calculateTax(10, true));           // false
// console.log(calculateTax([1, 2, 3], 10));      // false
// console.log(calculateTax("Codeup", 100));      // false
// console.log(calculateTax());                   // false
// console.log(calculateTax(100, "1000"));


//in class exercise Thur 9-2-21
//write a fortune teller function that takes in 4 arguments: future job, future spouse, future location, and
//future number of kids.

// function fortuneTeller(x, y, z, n){
//     console.log("Your future job is: " + x + ". Your future husband is " + z + ". Your future house will be in: " + y + ". You will have " + n + " kids.");
// }
//
// fortuneTeller("computer programmer", "the mountains", "Brad", "1"  );
// fortuneTeller("computer programmer", "the beach", "George", "2"  );
// fortuneTeller("computer programmer", "the bunker", "Zac", "3"  );
//
// console.log("-- reworking the in class exercise --");
// //rework the in class exercise:
// function tellFortune(numChildren, partnerName, geoLocation, jobTitle){
//     var output = "You will have " + numChildren + " kids, and be married to " + partnerName + " and live in " + geoLocation + ", and you will be a " + jobTitle;
//     return output;
// }
// console.log(tellFortune("3", "Brad,", "the mountains", "computer programmer"));
// console.log(tellFortune("2", "Tim", "the bunker", "back end developer"));


//w3 resource examples
//1. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNum(input){
    input = input.toString();
    return input.split("").reverse().join("");
}
console.log("--reverse a number--")
console.log(reverseNum(123));   //321
console.log(reverseNum(557));   //755
console.log(reverseNum(102103));   //301201
console.log(reverseNum("456"));    //654

//2. Write a JavaScript function that checks whether a passed string is palindrome or not?  For the assessment, if the string is numeric return false.
function isPalindrome(input) {
    if (input === null || !isNaN(input)) {
        return false;
    }
    input = input.toString();
    input = input.toLowerCase();   //only works for string
    var newString = input.split("").reverse().join("");
    if(newString === input){
        return true;
    }
    return false;
}

console.log("--palindrome--");
console.log(isPalindrome("Bob"));   //true
console.log(isPalindrome("Radar"));  //true
console.log(isPalindrome("tacocat"));  //true
console.log(isPalindrome("Mary"));    //false
console.log(isPalindrome(232));      //false
console.log(isPalindrome(231));      //false
console.log(isPalindrome("101"));      //false
console.log(isPalindrome(null));      //false
console.log(isPalindrome([2, 3, 3]));
console.log(isPalindrome({color: "blue"}));



//3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function comboString(input){
    var result = [];     //initialize an empty array
    for(var i = 0; i < input.length; i++){
       //result.push(input[i]);
       //console.log("this is i " + input[i]);
       for (var j = i + 1; j < input.length; j++){  //instead of j = 0 or j = 1 use i + 1
           result.push(input.substring(i, j));     //use substring to get a piece
           console.log("this is j " + input.substring(i, j));
       }
       result.push(input.substring(i));
       console.log(input.substring(i))
    }
    return result;
}
console.log(comboString("dog"));


//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

//You cannot sort a string. split sort join
function alphaBet(input){
    var output = false;
    if(typeof input === "string"){
        output = input.split("").sort().join("");  //if it's a string output will be this
    }
    return output;    //if it's not a string, my if statement won't run
}

console.log(alphaBet("webmaster"));
console.log(alphaBet(1234));
console.log(alphaBet(null));



//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '


//in class warm up. 9-3-21
//write a function named calculateDogAge that takes in 1 parameter, calc the dog's age 1 human yr is 7 dog yrs
//output your doggie is NN years old
function calculateDogAge(x){
    return "Your doggie is " + x * 7 + " years old in dog years!"
}

console.log(calculateDogAge(14));
console.log(calculateDogAge(10));
console.log(calculateDogAge(2));

//in class warmup take two. add an additional param that takes in the conversion rate
function calculatedogAgeConv(humanYears, conversion){
    var result = humanYears * conversion
    return "your dog in human years is " + humanYears + ", and your dog in dog years is " + result;
}
console.log(calculatedogAgeConv(1, 7));
console.log(calculatedogAgeConv(5, 7));


// bubbleSort.js
//from medium.com/jeremy-gottfrieds-tech-blog/algorithms-common-edge-cases-in-js-ce35a2d47674

function bubbleSort(array) {
    var swapped;
    do {
        swapped = false;
        for(var i = 0; i < array.length; i++) {
            if(array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while(swapped);
    return array;
}
function swap(array, i, j) {  //this function is being called by the function above
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var newArray = [8, 1, 2, 5, 4, 3, 7, 6];
var anewArr = [200, 150, 125, 175, 225, 110];
console.log(bubbleSort(newArray));
console.log(bubbleSort(anewArr));

//from geeksforgeeks.org
// Bubble sort Implementation using Javascript

function bblSort(arr){
    for(var i = 0; i < arr.length; i++){
// Last i elements are already in place
        for(var j = 0; j < ( arr.length - i -1 ); j++){

            // Checking if the item at present iteration
            // is greater than the next iteration
            if(arr[j] > arr[j+1]){

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
// Print the sorted array
    return arr;
}

// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];


// Now pass this array to the bblSort() function
console.log(bblSort(arr));

//from jshero.net
//Write a function shortcut that takes two strings and returns the initial letters
// of theses strings.
//
// Example: shortcut('Amnesty', 'International') should return 'AI'.

function shortcut(string1, string2){
    var firstFirst = string1.charAt(0);
    var firstSecond = string2.charAt(0);
    return firstFirst + firstSecond;
}

console.log(shortcut("Appalachian", "Trail"));
console.log(shortcut("New", "York"));
//now account for numbers, numerical strings, empty strings and other edge cases


//from jshero.net
//Write a function indexOfIgnoreCase taking two strings and determining
// the first occurrence of the second string in the first string.
// The function should be case insensitive.
function indexOfIgnoreCase(s1, s2){
    var news1 = s1.toLowerCase();
    var news2 = s2.toLowerCase();
    return news1.indexOf(news2);
}
console.log(indexOfIgnoreCase("bit", "it")); //should return 1 bc i is at index 1
console.log(indexOfIgnoreCase("Mary", "ry")); //should return 2 bc r is at index 2
console.log(indexOfIgnoreCase("Sarah", "H")); //should return 4
console.log(indexOfIgnoreCase("ROXANNE", "a")); //should return 3
console.log(indexOfIgnoreCase("happy", "meal")); //should return -1;

//from jshero//  Write a function secondIndexOf, taking two strings and
// determining the second occurrence of the second string in the first string.
// If the search string does not occur twice, -1 should be returned.

function secondIndexOf(inp1, inp2){
    var n1 = inp1.indexOf(inp2, 0);  //this would find the first index of whatever inp2 is
    var n2 = inp1.indexOf(inp2, n1 + 1); //you need to add 1 or it will start at n1
    return n2;
}

console.log(secondIndexOf("White Rabbit", "it"));  //10
console.log(secondIndexOf("White Rabbit", "bit")); //-1
console.log(secondIndexOf("Oh Dear Oh Dear", "Oh"));  //8
console.log(secondIndexOf("happy happy", "meal"));  //-1






