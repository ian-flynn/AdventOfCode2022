const fs = require('fs');
const folderPath = '/Users/ianflynn/Documents/GitHub/AdventOfCode2022/inputsSubmodule/Day1';
const calorieList = fs.readFileSync(folderPath).toString().split('\n')


let bigCals = 0, sum = 0;
const topThree = [];
calorieList.forEach(cal => {
    if(!cal){
        if(topThree.length < 3 || sum > Math.min(...topThree)) {
            topThree.push(sum);
            topThree.sort((a,b)=>a-b).reverse();
        }
        if(topThree.length > 3) topThree.pop();
        sum = 0;
    } else {
        sum+= parseInt(cal);
        if(sum > bigCals){
            bigCals = sum;
        }
    }
});
if(sum > Math.min(...topThree)){
    topThree.push(sum);
    topThree.sort((a,b)=>a-b).reverse();
    topThree.pop();
}

const total = topThree.reduce((acc,curr)=> acc+curr);
console.log(`The elf carring the most has ${bigCals} calories, the top three have ${topThree[0]}, ${topThree[1]}, ${topThree[2]}. Total of ${total}`);