// question 1
// your answer for question 1 goes here
let cat = {
    complain: function(){
        console.log("Meow!");
    }
};
cat.complain();

// question 2
// your answer for question 2 goes here
const heading = document.querySelector("h3");

// question 3
// your answer for question 3 goes here
heading.style.fontSize = "2em";

// question 4
// your answer for question 4 goes here
heading.classList.add("subheading");

// question 5
// your answer for question 5 goes here
const paragraph = document.querySelector("p");

// question 6
// your answer for question 6 goes here
let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// question 7
// your answer for question 7 goes here
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catArray(){
    for (let index = 0; index < catArray.length; index++) {
        console.log(catArray[index]);
    }
};
console.log(catArray[cats.name]);

/*
    I dind't really understand the question 7 on moodle. So I couldn't do the rest of  the tasks..
*/
