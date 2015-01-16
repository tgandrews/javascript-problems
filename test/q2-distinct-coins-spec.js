require('use-strict');

var should = require('should'),
  distinctCoins = require('../q2/distinct-coins');

describe('Distinct coins', function () {
  it('returns 1 for 1p', function () {
    var result = distinctCoins('1');
    should(result).equal(1);
  });

  it('returns 2 for 2p', function () {
    // 1x2p and 2x1p
    var result = distinctCoins('2');
    should(result).equal(2);
  });

  it('returns 4 for 5p', function () {
    // [1x5p] [2x2p 1x1p] [1x2p 3x1p] [5x1p]
    var result = distinctCoins('5');
    should(result).equal(4);
  });
});
