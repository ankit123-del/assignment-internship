const prompt = require('prompt-sync')();

const number = prompt("Enter a number to print its multiplication table: ");
for(let i=1;i<=10;i++) {
    let result = i * number;
    console.log(`${i} * ${number} = ${result}`);
}