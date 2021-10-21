const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(numArray) {
    return numArray.reduce((sum, addend) => {return sum + addend}, 0);
	
};

const multiply = function(numArray) {
    return numArray.reduce((product, factor) => {return product * factor}, 1);
};

const power = function(a, b) {
    return a ** b;
};

const factorial = function(num) {
    let product = 1;
    for (let i = num; i > 0; i--) {
        product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
