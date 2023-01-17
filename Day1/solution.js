const fs = require('fs');
const elfCalories = fs.readFileSync(`${__dirname}/input`).toString().split('\n')

console.log(elfCalories);

const findElf = (arr) => {
    let bigCals = 0, sum = 0;
    const topThree = ['howdy'];
    arr.forEach(cal => {
        if(!cal){
            //check if top three is has less than 3 things in it, if so add sum to it
            //if top three is full, 
            sum = 0;

        } else {
            sum+= parseInt(cal)
            if(sum > bigCals){
                bigCals = sum;
            }
        }
    })
    return `The elf carring the most has ${bigCals} calories, the top three are ${topThree}`;

}
console.log(findElf(elfCalories))