const fs = require('fs');
const folderPath = '../Inputs/Day5.txt';
const splitInfo = fs.readFileSync(folderPath).toString().split('\n\n')

const stacksInfo = splitInfo[0].split('\n').map(row => row.split('')).slice(0, -1)
const movesInfo = splitInfo[1].split('\n')
console.log('stacksInfo: ', stacksInfo)

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
//0 [ 'L', 'N', 'W', 'T', 'D' ]
//1 [ 'C', 'P', 'H' ]
//2 [ 'W', 'P', 'H', 'N', 'D', 'G', 'M', 'J' ]
//3 [ 'C', 'W', 'S', 'N', 'T', 'Q','L' ]
//4 [ 'P', 'H', 'C', 'N' ]
//5 [ 'T', 'H', 'N', 'D', 'M', 'W', 'Q', 'B' ]
//6 [ 'M', 'B', 'R', 'J', 'G', 'S', 'L' ]
//7 [ 'Z', 'N', 'W', 'G', 'V', 'B', 'R', 'T' ]
//8 [ 'W', 'G', 'D', 'N', 'P', 'L' ]

//[ 'move', '6', 'from', '6', 'to', '5' ]
function doMoves() {
    const stacks = stackMaker(stacksInfo)

    movesInfo.forEach(move => {
        move = move.split(' ')

        const numberToMove = move[1]
        const moveFrom = move[3] - 1 //index of actual stack are minus1 though so fix that
        const moveTo = move[5] - 1
        console.log(numberToMove, moveFrom, moveTo)

    })

}
console.log(doMoves())