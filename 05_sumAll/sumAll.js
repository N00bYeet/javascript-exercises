const sumAll = function(num1, num2) {
    if ((num1 < 0 || typeof num1 !== "number") || (num2 < 0 || typeof num2 !== "number")) {
        return "ERROR";
    }

    let start = num1 < num2 ? num1 : num2;
    let end = num1 > num2 ? num1 : num2;

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
