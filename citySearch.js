// JS_3 /// lecture 1 /// september 29, 2020

//////////////////

//code challenge

// Exercise 1
// Create a function called myName that takes a single argument.
// The return value of this function should be a string that says
// "My name is X" where X is the argument passed into the function.

// Example: myName('Chris') should return 'My name is Chris'

// function myName(moniker){
//     let x = moniker;
//     console.log ("'My name is " + x + "'");
// }

// myName('Chris')

// function myName(name){
//     return 'My name is ' + name;
// }

// myName('Chris') // teachers solution

// teaching based on cc1 // string interpolation

// function myName(name){
//     const occupation = "Software Developer";
//     const yearsOfJob = 5;
//     return `My name is ${name}. I've been a ${occupation} for ${yearsOfJob} years`;
// }
// `${}` syntax opens up variables

// Exercise 2

// Create a function called myFriends that takes an array as an argument.
// The return value of this function should be a string that says
// "I have X friends. My friends are named A, B, and C" where X is the
// number of friends you have and A, B, and C are the friends I've passed in.

// Example: myFriends(['Oggi', 'Sean', 'Susan']) should return 'I have 3 friends.
// My friends are named Oggi, Sean, and Susan'

// Tip: Don't worry about the 'and' until you've successfully returned a sentence
// with the friends listed.

// Stretch goal: If you've finished and used a for loop try again without a
// for loop, or vice-versa.

// function myFriends(list){
//     let list = (["Randi", "Sherri", "Chris"]);
// }

// function myFriends(friends){
//     let sentence = "I have " + friends.length + " friends. My friends are named ";
//     for (let i = 0; i < friends.length; i++){
//         if(i === friends.length -1){
//             sentence += "and " + friends[i] + ".";
//         } else {
//             sentence += friends[i] + ", ";
//         }
//     }
//     return sentence;
// } // teachers solution

// myFriends(["Randi", "Sherri", "Chris"])


// function displayNames(names){

//     for(let i = 0; i < names.length; i++){
//         result.innerHTML += `<div${names[i]}</div>`;
//     }
// }

// const myNames = ["Randi", "Sherri", "Chris"];

// displayNames(myNames); // old way

// const result = document.getElementsByClassName("result")[0];

// document.innerHTML(result);

// function displayNames(names){
    
//     names.forEach(function (name) {
//         result.innerHTML += `<div${names[i]}</div>`;
//     });
// }

// const myNames = ["Randi", "Sherri", "Chris"];

// displayNames(myNames); /// use forEach method from now on


//const result = document.getElementsByClassName("result")[0];

//document.innerHTML(result);

// function displayNamesWithMap(names){
    
//     const nameDivs = names.map(function (name) {
//         result `<div>${name}</div>`;
//     });

//     result.innerHTML += nameDivs.join("");
// }

// const myNames = ["Randi", "Sherri", "Chris"];

// displayNamesWithMap(myNames); /// use map method from now on too

// map changes value of original array versus forEach doesn't change values of original array


///// work earlier from teacher 

//const result = document.querySelector(".result");
                // function displayNames(names) {
                //   for (let i = 0; i < names.length; i++) {
                //     result.innerHTML += `<div>${names[i]}</div>`;
                //   }
                // }
// function displayNames(names) {
//   names.forEach(function (name) {
//     result.innerHTML += `<div>${name}</div>`;
//   });
// }
// function displayNamesWithMap(names) {
//   const nameDivs = names.map(function (name) {
//     return `<div>${name}</div>`;
//   });
//   result.innerHTML += nameDivs.join("");
// }
// const myNames = ["Oggi", "Chris", "Susan"];
// displayNamesWithMap(myNames);

//////end


// second code challenge 

// Write a function that accepts an array of objects as an argument.
// The objects should have two properties: name and favoriteColor.
// Iterate over the array using forEach and display a sentence for
// each object that says "X's favorite color is Y" where X is the
// name and Y is the favoriteColor. Use ES6 String interpolation.

// let x = [
//     {"name" : "John",
//     "color" : "Blue"},
//     {"name" : "Jane",
//     "color" : "Green"},
//     {"name" : "Paul",
//     "color" : "Purple"},
//     {"name" : "Sally",
//     "color" : "Pink"}

// ]

// function personsFaveColor(name, color){
//     name.forEach(function (name, color) {
//         result.innerHTML += `<div>${name}'s favorite color is ${color}</div>`;
//     });
//     return result;
// }

// personsFaveColor("Rosie", "Blue"); /// my solution didn't work

// function displayNames(names){
    
//     names.forEach(function (name) {
//         result.innerHTML += `<div${names[i]}</div>`;
//     });
// }

// const myNames = ["Randi", "Sherri", "Chris"];

// displayNames(myNames);


// teachers solution 

// const names = [
//     {
//         name: "Chris",
//         faveColor: "Red",
//     },
//     {
//         name: "Rose",
//         faveColor: "Blue",
//     },
// ];

// function nameColors(people){
//     people.forEach(function (person){
//         result.innerHTML += `<div>${person.name}'s favorite color is ${person.faveColor}</div>`;
//     });
// }

// nameColors(names)



// Stretch 1: Use .map instead of .forEach. Remember that .map
// returns a new array.

// function nameColors(people){
//     const colorDivs = people.map(function (person){
//         return `<div>${person.name}'s favorite color is ${person.faveColor}</div>`;
//     });

//     result.innerHTML +=  colorDivs.join("");
// }

// nameColors(names)




// Stretch 2: Turn favoriteColor into an array called favoriteColors.
// Use .join() to display a new sentence: "X's favorite colors are
// A, B, and C." If the favoriteColors array has only one item the
// sentence should remain "X's favorite color is Y."

// const namesWithColors = [
//     {
//         name: "Chris",
//         faveColor: ["Red", "Blue", "Orange"]
//     },
//     {
//         name: "Rose",
//         faveColor: ["Pink", "White", "Purple"],
//     },
// ];
//
// function nameColors(people){
//     const colorDivs = people.map(function (person){

//         if(person.favoriteColors.length === 0){
//             return `<div>${person.name} doesn't have a favorite color.</div>`;
//         }

//         if(person.favoriteColors.length === 1){
//             return `<div>${person.name}'s favorite colors are ${person.favoriteColors[0]}.</div>`;
//         }
//         return `<div>${person.name}'s favorite colors are ${person.favoriteColors.join(", ")}.</div>`;
//     });

//     result.innerHTML +=  colorDivs.join("");
// }

// nameColors(namesWithColors) // teachers solution


//// thursday lecture - 10-1-2020

// code challenge

// Create a function that accepts an array of objects.
// The objects should have at least two properties:
// name and occupation. Using the map() function,
// return an array of strings containing only the
// occupations from the objects.

// For example, given the following array of objects:

// const employees = [
//   {
//     name: "Chris",
//     occupation: "Instructor",
//   },
//   {
//     name: "Susan",
//     occupation: "Software Engineer",
//   },
//   {
//     name: "George",
//     occupation: "UI Designer",
//   },
// ];

// The return value of the function should be:

// ["Instructor", "Software Engineer", "UI Designer"]

// function jobNames(jobs){
//     const jobDivs = jobs.map(function (job){

//         return `<div>${job.occupation}</div>`;
//     });

//     result.innerHTML +=  jobDivs.join("");
// }

// jobNames(employees) // teachers solution


const cities = [
    { name: "Houston", population: 2099451, landmark: "NASA Space Center" },
    { name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign" },
    { name: "New York", population: 8175133, landmark: "Statue of Liberty" },
    { name: "Chicago", population: 2695598, landmark: "Willis Tower" },
    { name: "Philadelphia", population: 1526006, landmark: "Independence Hall" },
];

let greet = document.getElementsByClassName("greet")[0];
let searchBar = document.getElementsByClassName("searchBar")[0];
let searchButton = document.getElementsByClassName("searchButton")[0];
let result = document.getElementsByClassName("result")[0];

function showGreeting(){
    greet.innerHTML = "Welcome to City Search";
}
showGreeting()

// let answer = searchBar.value;
// let sVal = answer.toLowerCase(searchBar.value);

// function landingPage(){
//     if(answer === ""){
//         result.style.display = "none";
//     }
// }


function getSearchResult(event){

    let searchTerm = event.target.value;
    let sVal = searchTerm.toLowerCase();

    const filteredCities = cities.filter((city) => {
        return sVal === city.name;
    })
    
    const cityHTML = filteredCities.map((city) => {
        return `<div class="cityName">${city.name}</div>`
    })
    result.innerHTML += cityHTML;

    return result;

}

searchBar.addEventListener("keyup", getSearchResult);


// const answer2 = cities.filter(city => {

//     result.innerHTML += `<div class="infoLine">Wow! ${city.name}, Great Choice!</div>`
//     result.innerHTML += `<div class="cityName">City: ${city.name}</div>`;
//     result.innerHTML += `<div class="cityPop">Population: ${city.population}</div>`;
//     //result.innerHTML += `<div class="cityPop">Population: ${commafy(cities.population)}</div>`;
//     result.innerHTML += `<div class="cityLandmark">Landmark: ${city.landmark}</div>`;
//     return result;

// });

// function commafy(num) {
//     var str = num.toString().split('.');
//     if (str[0].length >= 5) {
//         str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
//     }
//     if (str[1] && str[1].length >= 5) {
//         str[1] = str[1].replace(/(\d{3})/g, '$1 ');
//     }
//     return str.join('.');
// }

//searchButton.addEventListener("click", getSearchResult);