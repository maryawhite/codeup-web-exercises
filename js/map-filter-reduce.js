"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array
let atLeast3 = users.filter(function(user){
    return user.languages.length >= 3;
});
console.log(atLeast3);

let atLeast3Arrow = users.filter((user) => user.languages.length >= 3);
console.log(atLeast3Arrow);

//3. Use .map to create an array of strings where each element is a user's email address
let usersEmail = users.map(function(user){
    return user.email;
});
console.log(usersEmail);

let userEmailArrow = users.map((user) => user.email);
console.log(userEmailArrow);

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average
let totalYearsExp = users.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.yearsOfExperience
}, 0);
console.log(totalYearsExp);

let totalYearsExpArrow = users.reduce((accumulator, currentValue) => accumulator + currentValue.yearsOfExperience, 0);
console.log(totalYearsExpArrow);


//5. Use .reduce to get the longest email from the list of users.

//6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.