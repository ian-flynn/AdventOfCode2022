const fs = require('fs');
const folderPath = '../Inputs/Day4';
let cleaningPairs = fs.readFileSync(folderPath).toString().split('\n')
// console.log(cleaningPairs)

 cleaningPairs = cleaningPairs.map(pair => {
    return pair.split(',').map(elem => elem.split('-').map(string => parseInt(string))) //.flat()
})
// console.log('new', test)
let overlapsFound = 0;
cleaningPairs.forEach(pair => { // [ [ 5, 90 ], [ 4, 90 ] ]
    const elfOne = pair[0]
    const elfTwo = pair[1]
    if(elfOne[0] <= elfTwo[0] && elfOne[1] >= elfTwo[1]){
        overlapsFound++
        console.log(pair, 'one is enveloping two')
    } else if(elfTwo[0] <= elfOne[0] && elfTwo[1] >= elfOne[1]) {
        console.log(pair, 'two is enveloping one')
        overlapsFound++
    }
})
console.log('final score', overlapsFound) // ==> 536