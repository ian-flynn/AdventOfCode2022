const fs = require('fs');
const elfCalories = fs.readFileSync(`${__dirname}/input`).toString().split('\n')

console.log(elfCalories);

const findElf = (arr) => {
    let bigCals = 0, sum = 0;
    const topThree = [];
    arr.forEach(cal => {
        if(!cal){
            //check if top three is has less than 3 things in it, if so add sum to it
            if(topThree.length < 3) topThree.push(sum)
            if(topThree.length === 3 && sum > Math.min(...topThree)){
                topThree.sort((a,b) => a-b).shift()
                topThree.push(sum)
            }
            sum = 0;

        } else {
            sum+= parseInt(cal)
            if(sum > bigCals){
                bigCals = sum;
            }
        }
    })
    let total = topThree.reduce((acc,curr)=> acc+curr)
    return `The elf carring the most has ${bigCals} calories, the top three are ${topThree[0]}, ${topThree[1]}, ${topThree[2]}. Total of ${total}`;

}
console.log(findElf(elfCalories))