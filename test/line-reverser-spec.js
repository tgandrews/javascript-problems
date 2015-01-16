require('use-strict');

var should = require('should'),
  lineReverser = require('../q1/line-reverser');

describe('Line reverser', function () {
  it('should reverse the words in a line', function () {
    var result = lineReverser('hello world');
    should(result).equal('world hello');
  });
});
