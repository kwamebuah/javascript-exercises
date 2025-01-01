const convertToCelsius = function(temp) {
  let cel = (temp - 32) * (5/9);
  cel = Math.round(cel * 10) / 10;
  return cel;
};

const convertToFahrenheit = function(temp) {
  let fah = (temp * (9/5)) + 32;
  fah = Math.round(fah * 10) / 10;
  return fah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
