const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a number: "));

if (number % 5 === 0 && number % 11 === 0) {
    console.log("The number is divisible by both 5 and 11.");
} else {
    console.log("The number is not divisible by both 5 and 11.");
}