// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesTwo(0) //0
// timesTwo(“5”) //20
// timesTwo(-5) //-20
// timesTwo(“Texas”) //false
// timesTwo([2,1,0]) //false
// timesTwo(true) //false
// timesTwo(null) //false




// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false


// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false




//in class exercise Thur 9-2-21
//write a fortune teller function that takes in 4 arguments: future job, future spouse, future location, and
//future number of kids.

function fortuneTeller(x, y, z, n){
    console.log("Your future job is: " + x + ". Your future husband is " + z + ". Your future house will be in: " + y + ". You will have " + n + " kids.");
}

fortuneTeller("computer programmer", "the mountains", "Brad", "1"  );
fortuneTeller("computer programmer", "the beach", "George", "2"  );
fortuneTeller("computer programmer", "the bunker", "Zac", "3"  );

console.log("-- reworking the in class exercise --");
//rework the in class exercise:
function tellFortune(numChildren, partnerName, geoLocation, jobTitle){
    var output = "You will have " + numChildren + " kids, and be married to " + partnerName + " and live in " + geoLocation + ", and you will be a " + jobTitle;
    return output;
}
console.log(tellFortune("3", "Brad,", "the mountains", "computer programmer"));
console.log(tellFortune("2", "Tim", "the bunker", "back end developer"));



