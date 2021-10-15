"use strict"
//Create a function that accepts a GitHub username,
// and returns a promise that resolves returning just the date of the last commit that user made.

$("body").css("background-color", "#CBE1E0");
//https://api.github.com/users/maryawhite/events?per_page=2
// fetch('https://api.github.com/users/maryawhite/events', {headers: {'Authorization': 'githubAPI'}})
//         .then(function(results){
//             console.log(results)    //this is a promise object
//             return results.json()
//         })
//         .then((resultsArray) => {
//             console.log(resultsArray);
//             // let myArray = resultsArray.results
//             // return myArray;
//             console.log("created Date and Time: " + resultsArray[0].created_at);
//         })
// fetch('https://api.github.com/users/maryawhite/events', {headers: {'Authorization': 'githubAPI', 'Accept' : 'application/vnd.github.v3+json'}})
//         .then(function(results){
//             console.log(results)    //this is a promise object
//             return results.json()
//                     .then((resultsArray) => {
//                         console.log(resultsArray)
//                         // let myArray = resultsArray.results
//                         // return myArray;
//                         console.log("created Date and Time: " + resultsArray[0].created_at)
//                         $(".test").html("created Date and Time: " + resultsArray[0].created_at);
//                     })
//         })

function getCommitDate(username){
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'githubAPI'}})
        .then(function(results){
            console.log(results)    //this is a promise object
            results.json()

            .then((resultsArray) => {
                console.log(resultsArray);
                console.log("created Date and Time: " + new Date (resultsArray[0].created_at));
                return new Date (resultsArray[0].created_at);
            })
        .catch(error => console.error(error))
        });
}

console.log(getCommitDate("maryawhite"));



//rewrite with arrow functions
// function getLastCommit(username){
//     fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'githubAPI'}})
//         .then(response => response.json())
//         .then(data => data.results)
//         .then(commit => {console.log(commit[0].created_at)})
// }
// console.log("with arrow functions: ");
// console.log(getLastCommit("maryawhite"));


// fetch("https://api.github.com/emojis").then(function(results){
//     console.log(results)
//     results.json()
//         .then((resultsObject) => {
//             console.log(resultsObject)
//             return resultsObject.results
//         });
// })