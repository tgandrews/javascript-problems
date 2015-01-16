var coins = [200, 100, 50, 20, 10, 5, 2, 1];

var DistinctCoins = function (penceString) {
  this._combinations = {};

  if (penceString.length < 1) {
    throw new Error('Empty pence string provided');
  }

  var parsedValue = parseInt(penceString);
  if (isNaN(parsedValue) || !isFinite(parsedValue)) {
    throw new Error('Non numeric pence string provided');
  }

  this._pence = parsedValue;
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

var main = function (penceString) {
  try {
    var distinctCoins = new DistinctCoins(penceString);
    return distinctCoins.getTotal();
  }
  catch (error) {
    console.error(error);
    return '';
  }
};



module.exports = main;
