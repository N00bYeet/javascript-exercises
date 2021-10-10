const removeFromArray = function(array, ...elements) {
    let elementsToRemove = Array.from(elements);
    return array.filter(value => !elementsToRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
