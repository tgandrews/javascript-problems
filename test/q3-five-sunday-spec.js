require('use-strict');

var should = require('should'),
  fiveSundays = require('../q3/five-sundays');

describe('Five Sundays', function () {
  it('returns 2 months with five sundays for September - December 2013', function () {
    var input = 'September 2013 December 2013';
    var result = fiveSundays(input);
    should(result).equal(2);
  });

  it('returns 2 months with five sundays for December 2013 - May 2014', function () {
    var input = 'December 2013 May 2014';
    var result = fiveSundays(input);
    should(result).equal(2);
  });

  it('returns blank string when start date is after end date', function () {
    var input = 'May 2014 December 2013';
    var result = fiveSundays(input);
    should(result).equal('');
  });

  it('returns blank string when there are missing parameters', function () {
    var input = 'May December 2013';
    var result = fiveSundays(input);
    should(result).equal('');
  });

  it('returns a blank string when there is an invalid month', function () {
    var input = 'Hello 2013 World 2014';
    var result = fiveSundays(input);
    should(result).equal('');
  });

  it('returns a blank string when there is an invalid year', function () {
    var input = 'May Year Jan Year';
    var result = fiveSundays(input);
    should(result).equal('');
  });
});
