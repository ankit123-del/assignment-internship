const prompt = require('prompt-sync')();

const age = parseInt(prompt("Enter your age: "));

if (age > 18) {
    console.log("you are allowed to vote.");
} else {
    console.log("you are not allowed to vote.");
}