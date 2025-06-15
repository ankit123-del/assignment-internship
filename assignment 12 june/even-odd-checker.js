const prompt = require('prompt-sync')();

const number = prompt("Enter a number: ");

if (number % 2 === 0) {
  console.log("The number is Even.");
} else {
  console.log("The number is Odd.");
}
