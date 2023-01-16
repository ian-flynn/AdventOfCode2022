const fs = require('fs');
const elfCalories = fs.readFileSync(`${__dirname}/index`)

console.log(elfCalories);


console.log('Hello Day 1!');