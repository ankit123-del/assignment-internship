const prompt = require('prompt-sync')();

const num = parseInt(prompt("Enter a number to find its factorial: "));

if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${num} is: ${factorial}`);
}
