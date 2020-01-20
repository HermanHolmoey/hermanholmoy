// question 1
// using the loop from question 5 above, only log the counter variable if it is an even number.
// your answer for question 1 goes here
for (var index = 15; index <= 25; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
};

// question 2
// Create a function that logs the sentence "I am a function". Assign this function to a variable called innerFunction. Create another function called outerFunction that accepts one argument. Inside outerFunction, call the argument like you would a function - with parenthesis (). Call outerFunction and pass in the innerFunction variable.
// your answer for question 2 goes here
function logSentence () {
  var innerFunction = "I am a function";
  console.log("I am a function");
};
logSentence();

function outerFunction(oneArgument) {
  oneArgument();
};
outerFunction(logSentence);
