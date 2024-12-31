const repeatString = function(string, num) {
    let newString = '';
    let errorMessage = 'ERROR';
    if (num < 0) {
        return errorMessage;
    }
    else {
        for (let i = 0; i < num; i++) {
            newString += string; 
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
