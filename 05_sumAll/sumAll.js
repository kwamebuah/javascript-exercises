const sumAll = function(a, b) {
    let errorMessage = 'ERROR';
    if (a < 0 || b < 0) {
        return errorMessage;
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return errorMessage;
    }
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    let length = b - a;
    let sum = a;

    for (let i = 1; i <= length; i++) {
        sum += a + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
