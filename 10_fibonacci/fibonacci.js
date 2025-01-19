const fibonacci = function (number) {
    if (number < 0) return 'OOPS';
    let fib = [0, 1];
    for (let i = 1; i < number; i++) {
        fib.push(fib[i - 1] + fib[i]);
    }
    return fib[number];
};

// Do not edit below this line
module.exports = fibonacci;
