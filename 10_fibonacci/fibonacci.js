const fibonacci = function(num, memo={}) {
    if (num < 0) {
        return "OOPS"
    } else if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else if (num in memo) {
        return memo[num];
    }

    memo[num] = fibonacci(num - 2, memo) + fibonacci(num - 1, memo); 
    return memo[num];
};

// Do not edit below this line
module.exports = fibonacci;
