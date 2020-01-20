// question 1
// declare and initialise a variable with a string value.
// your answer for question 1 goes here
var myName = "herman";
console.log(typeof myName);

// question 2
// Create an object variable called person and give it two properties (a key and a value) of your choice.
// your answer for question 2 goes here
var person = {name:"David", age:20};

// question 3
// create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks the value of outOfStock. If it is true, console log "Out of stock". Otherwise log "In stock".
// your answer for question 3 goes here
var outOfStock = true;
if (outOfStock === outOfStock) {
  console.log(outOfStock = "Out of stock");
} else {
  console.log(outOfStock = "In stock");
};

// question 4
// create an array of five numbers. Loop through the array and console log each value.
// your answer for question 4 goes here
var numberArray = [1, 2, 3, 4, 5];
for (var index = 0; index < numberArray.length; index++) {
  console.log(numberArray[index]);
};


// question 5
// create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
// your answer for question 5 goes here
for (var index = 15; index <= 25; index++) {
  console.log(index);
};

// question 6
// using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
// your answer for question 6 goes here
for (var index = 15; index <= 25; index++) {
  if (index === 20) {
    console.log(index)
  };
};

// question 7
// create an array of two objects. Each object must have the same three properties (with different values):
// loop through the array and console log the number value and the boolean value.
// your answer for question 7 goes here
var arrayObject = [
  {
    name: "John",
    age: 41,
    alive: true
  },
  {
    name: "Mark",
    age: 32,
    alive: false
  }
];

for (var i = 0; i <= arrayObject; i++) {
};
console.log(arrayObject[0].age);
console.log(arrayObject[1].age);
console.log(arrayObject[0].alive);
console.log(arrayObject[1].alive);

// question 8
// Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
// inside the function, log the string "I don't like " together with the argument.
// call the function and pass in a value of your choice.
// your answer for question 8 goes here
function whatIDontLike(logWord) {
  console.log("I don't like " + logWord);
}
whatIDontLike("Rain");

// question 9
// create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.
// your answer for question 9 goes here
function acceptTwoArguments(argument1, argument2) {
  var sum = argument1 - argument2
  console.log(sum);
}
acceptTwoArguments(30, 16)

// question 10
// create an empty array. Create a function that accepts one argument. Inside the function, add the argument to the array. Call the function and pass in a value of any type.
// your answer for question 10 goes here
var emptyArray = [];
function acceptOneArgument(person1){
  emptyArray.push(person1);
}
acceptOneArgument("Jake");
console.log(emptyArray);
