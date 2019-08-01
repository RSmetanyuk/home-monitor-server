function _getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _getRandomTemperature() {
  return _getRandomInt(21, 23) + parseFloat(Math.random().toFixed(2));
}

exports.getRandomInt = _getRandomInt;
exports.getRandomTemperature = _getRandomTemperature;
