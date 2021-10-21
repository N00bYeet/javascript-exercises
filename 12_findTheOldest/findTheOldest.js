const findTheOldest = function(array) {
    array.sort((a, b) => {
        let currentYear = new Date().getFullYear();
        let aAge = 'yearOfDeath' in a ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
        let bAge = 'yearOfDeath' in b ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;
        return aAge > bAge ? -1 : 1;
    })
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
