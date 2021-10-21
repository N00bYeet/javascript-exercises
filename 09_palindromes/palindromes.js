const palindromes = function (str) {
    let rawPalindrome = "";
    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            rawPalindrome += str[i];
        }
    }
    let filteredPalindrome = rawPalindrome.toLowerCase();

    let half = Math.floor(filteredPalindrome.length / 2);
    let front = filteredPalindrome.slice(0, half);
    let back = filteredPalindrome.slice(-half).split("").reverse().join("");

    return front === back;
};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

// Do not edit below this line
module.exports = palindromes;
