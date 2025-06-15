const prompt = require('prompt-sync')();

const a= parseInt(prompt("Enter a number: "));
const b= parseInt(prompt("Enter another number: "));
const c= parseInt(prompt("Enter one more number: "));

if (a > b && a > c) {
  console.log("The largest number is: " + a);
} else if (b > a && b > c) {
  console.log("The largest number is: " + b);
} else {
  console.log("The largest number is: " + c);
}