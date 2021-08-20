(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newPlanetsString = planetsArray.join("<br>");
    console.log(newPlanetsString);

    var unorderedPlanetsString = planetsArray.join("</li><li> ");  // join converts the array to a string with a separator
    var newArray = unorderedPlanetsString.split(" ");
    console.log(unorderedPlanetsString.split(" "));
    newArray.unshift("<ul><li>");  //unshift adds something to the beginning of an array
    newArray.push("</li></ul>");      //push adds something to the end of the array

    console.log(newArray.join(""));  //join turns the array back to a string;




})();
