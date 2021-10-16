"use strict"
const API_URL = "https://vagabond-glacier-verse.glitch.me/dogs";

function getDogs(){
    return fetch(API_URL,{
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    })
        .then((response) => response.json())
        .then(json => console.log(json))
}
//
// function getDog(id){
//     return fetch(`${API_URL}/${id}`)
//         .then((response)=> response.json())
// }
//in the console, the user would type getDog(11).then((dog)=>console.log(dog))

//Edit dog by ID
// function editDog(dog) {
//     let options = {
//         method: 'PUT',       //use put to edit the dog, we are not creating a new one
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dog)    //what is body. body is referring to the body of the request
//     }
//     return fetch(`${API_URL}/${dog.id}`, options)
//         .then((response)=>response.json())
// }
// let piper = {
//     name: 'Piper',
//     isGoodDog: false,
//     id: 11,
//     age: 8
// }

//editDog(piper).then((data)=>console.log(data))

// function deleteDog(id){
//     let options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }
//     fetch(`${API_URL}/${id}, options`)
//         .then((response) => console.log("deleted dog"))
// }

//Create dog
let _data = {
    name: 'Charlie',
    isGoodDog: false,
    age: 14
}
function createDog(dog) {
    let options = {
        method: 'POST',       //use put to edit the dog, we are not creating a new one
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(_data)
    }
    return fetch(API_URL, options)
        .then((response)=>response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

//createDog(charlie).then((newDog)=>console.log(newdog));