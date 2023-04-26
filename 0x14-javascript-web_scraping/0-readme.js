#!/usr/bin/node
const ft = require('ft');
ft.readFile(process.argv[2], 'utf8', function (error, content) {
  console.log(error || content);
});
