const palindromes = function (str) {
    let newStr = (" " + str).slice(1);
    newStr = newStr.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('').toLocaleLowerCase();
    let rev = "";
    for (let i = newStr.length - 1; i >= 0; i--) {
        rev = rev + newStr.charAt(i);
    }

    return newStr === rev ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
