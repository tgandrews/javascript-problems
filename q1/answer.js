var lineExecutor = require('../lib/line-executor');

var lineReverser = function (line) {
  console.log(line.split(' ').reverse().join(' '));
};

lineExecutor(lineReverser);
