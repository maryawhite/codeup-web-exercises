(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {};

    person.firstName = "Mary";
    person.lastName = "White";

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function(){
        console.log("Hello from " + this.firstName + " " + this.lastName + "!");
    };

    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a forEach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
    shoppers.forEach(function(shopper){
        if (shopper.amount > 200) {
            var discount = shopper.amount * .12
            //console.log(shopper.amount - discount);
        } else {
            var discount = 0;
            console.log(shopper.amount)
        }
        console.log(shopper.name + " your total before discount is " + shopper.amount + ". " + "Your discount is " + discount + ". Your new total is " +  (shopper.amount - discount));
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "The Outcast of Redwall",
            author: {
                firstName: "Brian",
                lastName: "Jacques"
            }
        },

        {
            title: "Killer",
            author: {
                firstName: "Peter",
                lastName: "Tonkin",
            }
        },

        {
            title: "Jurassic Park",
            author: {
                firstName: "Michael",
                lastName: "Crichton",
            }
        },

        {
            title: "Great Expectations",
            author: {
                firstName: "Charles",
                lastName: "Dickens",
            }
        },

        {
            title: "Salem's Lot",
            author: {
                firstName: "Stephen",
                lastName: "King",
            }
        },

        {
            title: "The E Myth Revisited",
            author: {
                firstName: "Michael",
                lastName: "Gerber",
            }
        },
    ];
    //console.log(books[0].title);
    //console.log(books[3].title);
    //console.log(books[4].author.lastName);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book, index){
        console.log("book #" + index);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("Title: " + book.title);
        console.log("- - - -");
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    console.log("This is the create books function: ");
function createBook(title, firstName, lastName){
    var newBook = {
        title: title,
        author: {
            firstName: firstName,
            lastName: lastName,
        }
    };
        //return bookObject;
        books.unshift(newBook);
    }

    console.log(createBook("The sun", "Jack", "Ryan"));

    //books.unshift(newBook) put this inside function
    //object methods are invoked by appending the objects name.method bookObject.title()

    createBook("Congo", "Michael", "Crichton");
    console.log(books);

function showBookInfo(object) {
    console.log(object.title + " " + object.author.firstName + object.author.lastName);

}
    console.log("this is showBookInfo:")

    var book1 = {
        title: "Zebra Stripes",
        author: {
            firstName: "Berry",
            lastName: "Cary"

        },
    }
    var book2 = {
        title: "X-ray Machine",
        author: {
            firstName: "Amy",
            lastName: "Barnes",
        }
    }

  showBookInfo(book1)
  showBookInfo(book2)

    console.log("This is the newest for Each loop");
      books.forEach(function(book, index){
      showBookInfo(book);
    });






})();
