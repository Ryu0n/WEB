const { Console } = require('console');
var path = require('path');

parsing = path.parse('../password.js');

console.log(parsing);
console.log(parsing.base);