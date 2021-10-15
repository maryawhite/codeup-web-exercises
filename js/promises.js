"use strict"
//Create a function that accepts a GitHub username,
// and returns a promise that resolves returning just the date of the last commit that user made.

$("body").css("background-color", "#CBE1E0");
//https://api.github.com/users/maryawhite/events?per_page=2
fetch('https://api.github.com/users/maryawhite/events', {headers: {'Authorization': 'githubAPI'}})
        .then(function(results){
            console.log(results)    //this is a promise object
            return results.json()
        })
        .then((resultsArray) => {
            console.log(resultsArray);
            // let myArray = resultsArray.results
            // return myArray;
        })


function getCommitDate(username){

}













// fetch("https://api.github.com/emojis").then(function(results){
//     console.log(results)
//     results.json()
//         .then((resultsObject) => {
//             console.log(resultsObject)
//             return resultsObject.results
//         });
// })