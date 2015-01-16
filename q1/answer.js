require('use-strict');

var lineExecutor = require('../lib/line-executor'),
  lineReverser = require('./line-reverser');

lineExecutor(lineReverser);
