// question 1
// your answer for question 1 goes here
(a, b) => {
    return a - b;
}

// question 2
// your answer for question 2 goes here
const jsonUrl = `https://api.rawg.io/api/games?genres=sports`;
const nameUrl = `${jsonUrl}games`;

fetch(nameUrl)
    .then(function(respons) {
        return respons.json();
    })
    .then(function(json) {
        console.dir(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

// question 3
// your answer for question 3 goes here
let animal = "These cats are outrageous.";
let animalReplace = animal.replace("cats", "giraffes");

// question 4
// your answer for question 4 goes here

// question 5
// your answer for question 5 goes here
var buttonRemove = document.querySelector(".btn");
buttonRemove.remove();
// question 6
// your answer for question 6 goes here
const listClass = document.createElement("li");
listClass.className = "parrots";

let listText = document.createTextNode("Parrots");
listClass.appendChild(listText);

document.body.appendChild(listClass);
// question 7
// your answer for question 7 goes here
