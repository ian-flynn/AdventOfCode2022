const fs = require('fs');
const folderPath = '../Inputs/Day1';
const calorieList = fs.readFileSync(folderPath).toString().split('\n')

// == Part One ==

function makeBackpacks(array){
    const backpacks =[]
    let items = []
    for(let i = 0; i<= array.length; i++){
        if(!array[i]){
            backpacks.push(items)
            items = []
        } else items.push(parseInt(array[i]))
    }
    return backpacks
}
const backpacks = makeBackpacks(calorieList)

function findBigCalBackpack (array){
    let biggest = 0;
    array.forEach(pack => {
        const sum = pack.reduce((acc, curr) => acc += curr, 0)
        if(sum > biggest) biggest = sum
    })
    return biggest
}
const mostCalories = findBigCalBackpack(backpacks)

console.log('Part One Answer: ', mostCalories) // ==> 68923

// == Part Two ==

function findThreeBiggestTotal (array){
    const threeBiggest = [];
    array.forEach(backpack => {
        const sum = backpack.reduce((acc, curr) => acc + curr, 0)
        threeBiggest.push(sum)
    })
    threeBiggest.sort((a, b) => b - a)
    return threeBiggest.slice(0,3).reduce((acc, curr) => acc + curr)
}
const topThree = findThreeBiggestTotal(backpacks)
console.log('Part Two Answer: ', topThree) // ==> 200044