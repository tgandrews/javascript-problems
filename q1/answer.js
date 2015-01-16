var fs = require('fs'),
  readline = require('readline');

// First arg - 0: node, 1: this file, 2: first arg
var filePath = process.argv[2];

var reader = readline.createInterface({
  input: fs.createReadStream(filePath),
  terminal: false
});

var lineReverser = function (line) {
  console.log(line.split(' ').reverse().join(' '));
};

reader.on('line', lineReverser);
