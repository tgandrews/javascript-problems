require('use-strict');

var lineExecutor = require('../lib/line-executor'),
  distinctCoins = require('./distinct-coins');

lineExecutor(distinctCoins);
