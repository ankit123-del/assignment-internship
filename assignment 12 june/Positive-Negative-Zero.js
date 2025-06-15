const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a number: "));

if (number > 0) {
  console.log("The number is Positive.");
} else if (number < 0) {
  console.log("The number is Negative.");
} else {
  console.log("The number is Zero.");
}
