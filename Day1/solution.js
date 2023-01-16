const fs = require('fs');
const elfCalories = fs.readFileSync(`${__dirname}/input`).toString().split('\n')

console.log(elfCalories);

const findElf = (arr) => {
    let bigElf;
    let bigSum = 0;
    let sum = 0;
    let place = 1;
    for(let i=0; i<arr.length; i++){
        if ( arr[i] === '' ){
            sum = 0;
            place++
        } else {
            sum += parseInt(arr[i])
            if ( sum > bigSum ){
                bigSum = sum;
                bigElf = place;
            } 
        }
    }
    return `The ${bigElf}th elf is carring the most, with ${bigSum} calories`;

}
console.log(findElf(elfCalories))