function isPalindrome(str) {
    str = str.toLowerCase();
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
console.log(isPalindrome("Racecar")); 