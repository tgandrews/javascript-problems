require('use-strict');

var should = require('should'),
  distinctPowers = require('../q4/distinct-powers');

describe('Distinct Powers', function () {
  it('returns 8 distinct powers for 2 to 4', function () {
    var input = '2 4';
    var result = distinctPowers(input);
    should(result).equal(8);
  });

  it('returns 3 distinct powers for 1 to 2', function () {
    var input = '1 2';
    var result = distinctPowers(input);
    should(result).equal(3);
  });

  it('returns blank string when invalid number', function () {
    var input = 'a 2';
    var result = distinctPowers(input);
    should(result).equal('');
  });

  it('returns a blank string when there are incorrect number of arguments', function () {
    var input = '1 2 3 4';
    var result = distinctPowers(input);
    should(result).equal('');
  });
});
