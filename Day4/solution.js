const fs = require('fs');
const folderPath = '../Inputs/Day4';
const cleaningPairs = fs.readFileSync(folderPath).toString().split('\n')
// console.log(cleaningPairs)

// == Part One ==

function pairFormatter(array){ // '1-69,37-69' ==> [ [1, 69], [37, 69] ]
    return array.map(pair => {
        return pair.split(',').map(elem => elem.split('-').map(string => parseInt(string)))
    })
}
const formattedPairs = pairFormatter(cleaningPairs)
console.log(formattedPairs)

function overlapDetector(array){
    return array.reduce((acc, curr) => { //  [ [1, 69], [37, 69] ]
        const elfOne = curr[0] //  [1, 69]
        const elfTwo = curr[1] //  [37, 69]
        if(elfOne[0] <= elfTwo[0] && elfOne[1] >= elfTwo[1]) return acc + 1
        if(elfTwo[0] <= elfOne[0] && elfTwo[1] >= elfOne[1]) return acc + 1
        return acc;
    }, 0)
}

const overlapsFound = overlapDetector(formattedPairs)
console.log('Part One Solution: ', overlapsFound) // ==> 536

// == Part Two ==