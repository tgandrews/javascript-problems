var coins = [200, 100, 50, 20, 10, 5, 2, 1];

var DistinctCoins = function (penceString) {
  this._combinations = {};
  this._isNumeric = false;

  var penceValue = 0;
  if (penceString.length > 0) {
     var parsedValue = parseInt(penceString);
     if (!isNaN(parsedValue) && isFinite(parsedValue)) {
       this._isNumeric = true;
       penceValue = parsedValue;
     }
  }

  this._pence = penceValue;
};

DistinctCoins.prototype.getTotal = function () {
  if (this._isNumeric) {
    this._calculate(this._pence, []);
    return Object.keys(this._combinations).length;
  }
  else {
    return '';
  }
};

DistinctCoins.prototype._calculate = function (pence, coinSequence) {
  for (var i = 0; i < coins.length; ++i) {
    var coin = coins[i];
    if (coin > pence) {
      continue;
    }

    var remainder = pence - coin;

    // We are starting a new sequence for each coin so slice to ensure arrays not shared
    var localSequence = coinSequence.slice(0);
    localSequence.push(coin);

    if (remainder === 0) {
      // Ensure we do not get duplicate results e.g. 211 and 121 for 4p which are the same
      var stringSequence = localSequence.sort().join('');

      if (this._combinations[stringSequence] !== true) {
        this._combinations[stringSequence] = true;
      }
    }
    else {
      this._calculate(remainder, localSequence);
    }
  }
};

var main = function (line) {
  var distinctCoins = new DistinctCoins(line);
  return distinctCoins.getTotal();
};



module.exports = main;
