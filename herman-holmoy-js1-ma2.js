// question 1
// your answer for question 1 goes here
const myFunctionExpression = function() {
    console.log("Herman");
}
myFunctionExpression();

// question 2
// your answer for question 2 goes here
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    console.log("I was clicked");
})

// question 3
// your answer for question 3 goes here
const inputClass = document.querySelector(".input");

inputClass.addEventListener("keydown", function(event) {
    console.dir(event);
})

// question 4
// your answer for question 4 goes here
const hoverButton = document.querySelector("button");

hoverButton.addEventListener("mouseover", function() {
    hoverButton.classList.add(".hover");
    console.log("button hovered");
})

// question 5
// your answer for question 5 goes here
const mouseoutButton = document.querySelector("[data-animal]");

mouseoutButton.addEventListener("mouseout", function() {
    mouseoutButton.classList.remove(".hover");
    console.log("Button mouseout");
})

// question 6
// your answer for question 6 goes here
const list = document.querySelectorAll("li");

for(let index = 0; index < list.length; index++) {
    list[index].addEventListener("mouseover");
};
