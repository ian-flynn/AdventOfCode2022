const fs = require('fs');
const folderPath = '../Inputs/Day5.txt';
const splitInfo = fs.readFileSync(folderPath).toString().split('\n\n')

const stacksInfo = splitInfo[0].split('\n').map(row => row.split('')).slice(0, -1)
const movesInfo = splitInfo[1].split('\n')

function stackMaker(inputArray) {
    const array = JSON.parse(JSON.stringify(inputArray)); // Deep copy so I can splice off values
    const columns = Math.ceil(array[0].length / 4)
    // const stacks = Array(columns).fill([]) // weird this doesn't work, have to look into that

    const stacks = []
    for (let i = 0; i < columns; i++) stacks.push([])// [[column 1],[column 2],[column 3],[etc],[]]

    for (let i = 0; i < stacks.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const snippet = array[j].splice(0, 4).join('').trim()
            if (snippet) stacks[i].push(snippet)
        }
    }
    return stacks.map(stack => stack.map(item => item[1]).reverse())
}

function doMoves(craneModel) {
    const stacks = stackMaker(stacksInfo)

    movesInfo.forEach((move) => {
        move = move.split(' ')

        let numberToMove = move[1]
        const moveFrom = move[3] - 1
        const moveTo = move[5] - 1

        if (craneModel === 'CrateMover 9000') {
            while (numberToMove > 0) {
                stacks[moveTo].push(stacks[moveFrom].pop())
                numberToMove--
            }
        }
        if (craneModel === 'CrateMover 9001') {
            stacks[moveTo].push(...stacks[moveFrom].splice(-numberToMove, numberToMove))
        }
    })
    return stacks
}

console.log('Part One Solution: ', doMoves('CrateMover 9000').map(arr => arr.slice(-1)).flat().join(''))
console.log('Part Two Solution: ', doMoves('CrateMover 9001').map(arr => arr.slice(-1)).flat().join(''))