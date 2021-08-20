(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var peoplesNames = ["Roxanne", "Betsy", "Sage", "Daphne"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There are " + peoplesNames.length + " elements in this array.");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(peoplesNames[0]);
    console.log(peoplesNames[1]);
    console.log(peoplesNames[2]);
    console.log(peoplesNames[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(var i = 0; i < peoplesNames.length; i++) {
    console.log("This is my for loop " + peoplesNames[i]);
}

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    peoplesNames.forEach(function(element, index, array){
        console.log("Here's the forEach loop " + element);
});

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(array){
        //console.log("The first item is " + peoplesNames[0]);
        console.log("Using a function, the first item is " + array[0]);
    }
    first(peoplesNames);

    function second(array){
        //console.log("The second item is " + peoplesNames[1]);
        console.log("Using a function, the second item is " + array[1]);
    }
    second(peoplesNames);

    function last(array){
        //console.log("The last item is " + peoplesNames[peoplesNames.length - 1]);
        console.log("Using a function, the last item is " + array[array.length -1]);
    }
    last(peoplesNames);

    //var testArray = [1, 2, 3, 4, 5];
    //console.log(first(testArray));
    //second(testArray);
    //last(testArray);











})();
