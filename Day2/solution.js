const fs = require('fs');
const folderPath = '../Inputs/Day2';
const moves = fs.readFileSync(folderPath).toString().split('\n')

// == PART ONE ==
const points = {rock: 1, paper: 2, scissors: 3, win: 6, tie: 3, lose: 0};

function findTotalPointsPlan (array){
    let score = 0;
    const moves = { A: 'rock', B: 'paper', C: 'scissors', X: 'rock', Y: 'paper', Z: 'scissors'};
    
    array.forEach(play => {
        const theirPlay = moves[play[0]]
        const myPlay = moves[play[2]]
        if(theirPlay === myPlay) return score += points.tie + points[myPlay]
        if(theirPlay === 'rock' && myPlay === 'scissors') return score += points.lose + points[myPlay]
        if(theirPlay === 'paper' && myPlay === 'rock') return score += points.lose + points[myPlay]
        if(theirPlay === 'scissors' && myPlay === 'paper') return score += points.lose + points[myPlay]
        score += points.win + points[myPlay]
    })
    return score
}
const partOnePlan = findTotalPointsPlan(moves) // ==> 13268
console.log('Part One Answer: ', partOnePlan)

// == PART TWO ==

function updatedPlan(array){
    let score = 0
    const moves = { A: 'rock', B: 'paper', C: 'scissors', X: 'lose', Y: 'tie', Z: 'win'};
    
    array.forEach(play => {
        const theirPlay = moves[play[0]]
        const myPlay = moves[play[2]]
        if(myPlay === 'tie') return score += points.tie + points[theirPlay]
        if(myPlay === 'lose'){
            if(theirPlay === 'rock') return score += points.lose + points.scissors
            if(theirPlay === 'paper') return score += points.lose + points.rock
            return score += points.lose + points.paper
        }// else I must win
        if(theirPlay === 'rock') return score += points.win + points.paper
        if(theirPlay === 'paper') return score += points.win + points.scissors
        return score += points.win + points.rock
    })
    return score;
}
const newMoveTotal = updatedPlan(moves)
console.log('Part Two Solution: ', newMoveTotal) // ==> 15508

