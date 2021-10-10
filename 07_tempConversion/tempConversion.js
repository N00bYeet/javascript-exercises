const ftoc = function(temp) {
  let rawConversion = (temp - 32) * 5 / 9;
  return Math.round(rawConversion * 10) / 10;
};

const ctof = function(temp) {
  let rawConversion = temp * 9 / 5 + 32;
  return Math.round(rawConversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
