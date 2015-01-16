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
});
