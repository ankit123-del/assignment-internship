const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a number: "));
    if (number < 10) {
  console.log("The number is less than 10.");
} else if (number >= 10 && number <= 20) {
  console.log("The number is between 10 and 20.");
} else {
  console.log("The number is greater than 20.");
}