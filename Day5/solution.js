const fs = require('fs');
const folderPath = '../Inputs/Day5.txt';
const splitInfo = fs.readFileSync(folderPath).toString().split('\n\n')

const stacksInfo = splitInfo[0].split('\n').map(row => row.split('')).slice(0, -1)
const movesInfo = splitInfo[1].split('\n')
console.log('stacksInfo: ', stacksInfo)

function matrixMaker(inputArray){
    const array = JSON.parse(JSON.stringify(inputArray)); // Deep copy so I can splice off values

    const columns = Math.ceil(array[0].length / 4)
    // const stacks = Array(columns).fill([]) // weird this doesn't work, have to look into that
    const stacks = []
    for(let i = 0; i < columns; i++) stacks.push([])

    for(let i = 0; i < stacks.length; i++){
        for(let j = 0; j < array.length; j++){
            const snippet = array[j].splice(0, 4).join('').trim()
            if(snippet) stacks[i].push(snippet)
        }
    }
    return stacks.map(stack => stack.map(item => item[1]).reverse())
}
const mewtwo = matrixMaker(stacksInfo)
console.log(mewtwo)
console.log()