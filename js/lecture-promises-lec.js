
"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon')
// return of fetch request is a Promise object


//TODO: console log the results of the above Promise. What is the result?
// console.log(pokemonAPI)
// //TODO: add a method that runs if the Promise resolves successfully
// //TODO: add a method that runs if the Promise fails
// //TODO: In the callback function of the .then method, parse the response into JSON
pokemonAPI.then(function(response){  //you can name this results or response
    console.log(response)
    // response.text().then((text) => {console.log(text)});
    response.json()
        .then((responseObject) => {
            console.log(responseObject)
            console.log(responseObject.results[0])
            document.getElementsByClassName(".pokemon-container").innerHTML = responseObject.results[0];

        })

}).catch(function(error){
    console.log(error);
})




//.done is for JQuery, .then is for promises


/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?
// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(function(results) {  //you can name this results or response
//         console.log(results)
//         results.json().then((resultsObject) => {
//                 console.log(resultsObject.results)
//                 return resultsObject.results
//             })
//             // .then((pokemon) => console.log(pokemon[0].name))
//     }).catch(function(error){
//     console.log(error);
//     })
//
// // BONUS: Is there a way for us to clean up our code?
// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((response)=> response.json())
//     .then((jsonData)=>jsonData.results)
//     .then((results) => {results.forEach((result) => (result.name))})


// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((response) => {
//         return response.json();
//     })
//     .then((jsonData) => {
//         jsonData.results
//     })
//     .then((results) => {results.forEach((result) => (result.name))})


// Let's try working with the Star Wars API!
// fetch("https://swapi.dev/api/films")
// //
// // // TODO: Using Promises, make a fetch request to the Star Wars API
//     .then((response)=>{
//         return response.json();     //the json method returns a promise, you have to chain another .then() after it
//     }).then((starWarsFilmsData)=>{           //you can name this parameter whatever you want
//         console.log(starWarsFilmsData);
//     starWarsFilmsData.results.forEach((film) => {console.log(film.title)})  //we know this is an array so we can iterate over it
// })
// TODO: Use Promise chaining to console log the json response

// TODO: chain another method that iterates through the results array and console logs the names

// TODO: Demonstrate Promise.all and Promise.race
// let pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// let starWarsAPI = fetch("https://swapi.dev/api/films");
// Promise.all([pokemonAPI, starWarsAPI])
//     .then((responses) => {
//         //responses contains the resolved promises in the same order that they were passed into when using all
//         // console.log(responses[0].json().then((parsedData)=>{console.log(parsedData)}))  //this would give a result but may lead to pyramid of doom
//         return Promise.all(
//             responses.map((response) => {
//                 return response.json()
//             }
//             ))
//     }).then((parsedResults) => {
//         console.log(parsedResults);  //this will give us both objects in an array
//         // console.log(parsedResults[0].results[0]);
//     })
//
// Promise.race([pokemonAPI, starWarsAPI])
//     .then((response) => {console.log(response)})

//fetch a photo from a local file
//shorthand
async function showImage(){
    const response = await fetch("img/stone-mtn-reflect.jpg");
    const blob = await response.blob();
    document.getElementById("rainbow").src = URL.createObjectURL(blob);
}
showImage()
    .then(response => {
        console.log("yay, no error!");
    })
    .catch(error => {
        console.log("error!");
        console.error(error);
    });
//longhand
// fetch("img/stone-mtn-reflect.jpg")
// .then(response => {console.log(response)
//     return response.blob();
// })
//     .then(blob => {
//         console.log(blob);
//         // document.getElementById("rainbow").src = URL.createObjectURL(blob);
//     })
//     .catch(error => {
//         console.error(error);
//     });

//step 1 call fetch on a URL
//step 2 use then method get a response from the Promise, the return triggers another promise so then you need another then
//step 3 grab the data from the body of the response
//step 4 make an element, i.e. make the img element with the data

