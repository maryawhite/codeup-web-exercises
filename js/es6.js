/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  },
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'mary';
var email = 'mary.a.white28@gmail.com';
var languages = ['html', 'css', 'javascript'];
// var name = "mary ann";   //this results in a syntax error, Identifier name has already been declared
console.log(users);

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});


// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
// users.forEach(function(user) {
//   return names.push(user.name);
// });

users.forEach(user => emails.push(user.email))
users.forEach(user => names.push(user.name));
console.log(emails);
console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const {name, email, languages} = user
  console.log(`name: ${name}, email: ${email}, languages: ${languages}`);

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(", ")}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//   // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });
// list += '</ul>';

for (let developer of developers){
  list += `<li> ${developer} </li>`;
}
list += `</ul>`

console.log(developers);
console.log(list);


//Classes
class Polygon {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
  get area(){
    return this.calcArea();
  }
  calcArea(){
    return this.height * this.width;
  }
}
const rectangle = new Polygon(10, 5);
const rectangle2 = new Polygon(8, 10);
console.log("classes...")
console.log(rectangle.area);
console.log(rectangle2.area);

