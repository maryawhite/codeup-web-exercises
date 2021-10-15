"use strict"
$("body").css("background-color", "#CBE1E0");

fetch('https://api.github.com/users', {headers: {'Authorization': 'githubAPI'}})
        .then(function(results){
            console.log(results)
            results.json()
                .then((resultsObject) => {
                    console.log(resultsObject);
                    return resultsObject.results
                })
        });

//Create a function that accepts a GitHub username,
// and returns a promise that resolves returning just the date of the last commit that user made.


// fetch("https://api.github.com/emojis").then(function(results){
//     console.log(results)
//     results.json()
//         .then((resultsObject) => {
//             console.log(resultsObject)
//             return resultsObject.results
//         });
// })