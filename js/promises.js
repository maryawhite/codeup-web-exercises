"use strict"

fetch('https://api.github.com/users', {headers: {'Authorization': 'githubAPI'}})
        .then(function(results){
            console.log(results)
            results.json()
                .then((resultsObject) => {
                    console.log(resultsObject);
                    return resultsObject.results
                })
        })
