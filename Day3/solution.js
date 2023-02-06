const fs = require('fs');
// const folderPath = '/Users/ianflynn/Documents/GitHub/AdventOfCode2022/Inputs/Day3';
const folderPath = '../Inputs/Day3';
const backpacks = fs.readFileSync(folderPath).toString().split('\n')

function getPriority(char){
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.indexOf(char)+1
}

// ==Part One==

let part1Total = 0;
backpacks.forEach(el => {
    const firstCompartment = el.slice(0, el.length/2).split('');
    const secondCompartment = el.slice(el.length/2);
    const match = firstCompartment.filter(elem => secondCompartment.includes(elem))[0]
    part1Total += getPriority(match)
})
console.log('Part 1 Total: ', part1Total) // ==> 7597

// ==Part Two==

const groups = []
let group = []
for(let i=0; i<= backpacks.length; i++){
    if(i % 3 === 0 && i !== 0){
        groups.push(group)
        group = []
    }
    if(backpacks[i]) group.push(backpacks[i].split(''))
    
}

const part2Total = groups.reduce((acc, curr) => {
    const badge = curr.reduce((acc, curr) => acc.filter(item => curr.includes(item)))[0]
    return acc += getPriority(badge)
}, 0)

console.log('Part 2 Total: ', part2Total) // ==> 2607

