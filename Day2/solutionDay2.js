const fs = require('fs');
const moves = fs.readFileSync(`${__dirname}/input`).toString().split('\n');
console.log(moves)