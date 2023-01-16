const fs = require('fs');
const elfCalories = fs.readFileSync(`${__dirname}/input`).toString().split('\n')

console.log(elfCalories);

const findElf = (arr) => {
    let bigElf, bigCals = 0, sum = 0, place = 1;
    arr.forEach(cal => {
        if(!cal){
            sum = 0;
            place++;
        } else {
            sum+= parseInt(cal)
            if(sum > bigCals){
                bigCals = sum;
                bigElf = place;
            }
        }
    })
    return `The ${bigElf}th elf is carring the most, with ${bigCals} calories`;

}
console.log(findElf(elfCalories))