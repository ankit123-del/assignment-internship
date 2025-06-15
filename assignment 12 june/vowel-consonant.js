const prompt = require('prompt-sync')();

const character = prompt("Enter a character: ");

if ("aeiou".includes(character.toLowerCase())) {
    console.log(character + " is a vowel.");
} else {
    console.log(character + " is a consonant.");
}
