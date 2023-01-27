const { groupCollapsed } = require('console');
const fs = require('fs');
const folderPath = '/Users/ianflynn/Documents/GitHub/AdventOfCode2022/inputsSubmodule/Day3';
const info = fs.readFileSync(folderPath).toString().split('\n')
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// ==Part One==
// let total = 0;
// info.forEach(el => {
//     const firstCompartment = el.slice(0, el.length/2).split('');
//     const secondCompartment = el.slice(el.length/2);
//     const match = firstCompartment.filter(elem => secondCompartment.includes(elem))
//     total += alphabet.indexOf(...match)+1
// })
// console.log(total)//--> 7597

// ==Part Two==
const groups = []
let group = []
for(let i=0; i< info.length; i++){
    if(i % 3 === 0 && i !== 0){
        groups.push(group)
        group = []
    }
    group.push(info[i].split(''))
}

let newTotal = 0
groups.forEach(group => {
    // console.log(alphabet.indexOf(group.reduce((acc, curr)=> acc.filter(item => curr.includes(item)))[0] )+1)
    newTotal += (alphabet.indexOf(group.reduce((acc, curr)=> acc.filter(item => curr.includes(item)))[0] )+1)
    }
)
console.log(newTotal)



// let group = [
//     ['c', 's', 'T', 'R', 'N','Q', 'N', 'J', 'c', 'N','B', 'D', 'L', 'f', 'h','f', 'M', 'f'],
//     ['q', 'G', 'm', 'W', 'p','G', 'H', 'q', 'r', 'q','P', 'L', 'C', 'h', 'P','R', 'h', 'V', 'F', 'P','D', 'D'],
//     ['t', 'g', 'H', 'r','t', 'n', 'r', 'r', 'J', 'n', 'Z', 'R','T', 'Z', 'c', 'v']
// ]
// let badge = group.reduce((acc, curr)=> acc.filter(item => curr.includes(item)))
// console.log(badge)
// Q
// G
// W
// N
// W
// b1
// M38
// F31
// j9
// w22
// C28
// l11
// r17
// n13
// q 16
// g 6
// F 31
42
32
48
39
48
1
38
31
9
22
28
11
17
13
16
6
31