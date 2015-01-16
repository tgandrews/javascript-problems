var DistinctPowers = function (x, y) {
  this._x = x;
  this._y = y;

  this._powers = {};
};

DistinctPowers.prototype.getTotal = function () {
  this._calculate();
  return Object.keys(this._powers).length;
};

DistinctPowers.prototype._calculate = function () {
  for (var x = this._x; x <= this._y; ++x) {
    for (var y = this._x; y <= this._y; ++y) {
      var power = Math.pow(x, y);
      if (this._powers[power] !== true) {
        this._powers[power] = true;
      }
    }
  }
};

var stringToInt = function (numString) {
  var num = parseInt(numString);

  if (isNaN(num) || !isFinite(num)) {
    throw new Error('Expected a valid integer but found: ' + numString);
  }
  return num;
};

var main = function (input) {
  var x, y;
  try {
    var splitInput = input.split(' ');
    if (splitInput.length !== 2) {
      throw new Error('Expect input in the format \'X Y\'');
    }

    var first = stringToInt(splitInput[0]);
    var second = stringToInt(splitInput[1]);

    x = Math.min(first, second);
    y = Math.max(first, second);
  }
  catch (error) {
    console.error(error);
    return '';
  }

  var powers = new DistinctPowers(x, y);
  return powers.getTotal();
};

module.exports = main;
