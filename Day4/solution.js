const fs = require('fs');
const folderPath = '../Inputs/Day4';
const cleaningPairs = fs.readFileSync(folderPath).toString().split('\n')

// == Part One ==

function pairFormatter(array){
    return array.map(pair => {
        return pair.split(',').map(elem => elem.split('-').map(string => parseInt(string)))
    })
}
const formattedPairs = pairFormatter(cleaningPairs)

function overlapDetector(array){
    // let overlaps = 0;
    // array.forEach(pair => { 
    //     const elfOne = pair[0]
    //     const elfTwo = pair[1]
    //     if(elfOne[0] <= elfTwo[0] && elfOne[1] >= elfTwo[1]) overlaps++
    //     else if(elfTwo[0] <= elfOne[0] && elfTwo[1] >= elfOne[1]) overlaps++
    // })
    // return overlaps
    
   return array.reduce((acc, curr) => { 
        const elfOne = curr[0]
        const elfTwo = curr[1]
        if(elfOne[0] <= elfTwo[0] && elfOne[1] >= elfTwo[1]) acc++
        else if(elfTwo[0] <= elfOne[0] && elfTwo[1] >= elfOne[1]) acc++
        return acc;
    }, 0)
    // return overlaps
}

const overlapsFound = overlapDetector(formattedPairs)
console.log('Part One Solution: ', overlapsFound) // ==> 536

// == Part Two ==