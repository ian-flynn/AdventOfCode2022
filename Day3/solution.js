const fs = require('fs');
const folderPath = '/Users/ianflynn/Documents/GitHub/AdventOfCode2022/inputsSubmodule/Day3';
const info = fs.readFileSync(folderPath).toString().split('\n')
let total = 0;
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
info.forEach(el => {
    const firstCompartment = el.slice(0, el.length/2).split('');
    const secondCompartment = el.slice(el.length/2);
    const match = firstCompartment.filter(elem => secondCompartment.includes(elem))
    total += alphabet.indexOf(...match)+1
})
console.log(total)