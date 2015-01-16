var coins = [200, 100, 50, 20, 10, 5, 2, 1];

var DistinctCoins = function (penceString) {
  this._combinations = {};
  if (penceString.length > 0) {
    this._pence = parseInt(penceString);
  }
  else {
    this._pence = 0;
  }
};

DistinctCoins.prototype.getTotal = function () {
  this._calculate(this._pence, []);
  return Object.keys(this._combinations).length;
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
  if (line.length > 0) {
    var distinctCoins = new DistinctCoins(line);
    return distinctCoins.getTotal();
  }
  else {
    return '';
  }
};



module.exports = main;
