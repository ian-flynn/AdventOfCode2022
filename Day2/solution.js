const fs = require('fs');
const folderPath = '../Inputs/Day2';
const moves = fs.readFileSync(folderPath).toString().split('\n')

// == PART ONE ==

function findTotalPointsPlan (array){
    const newMoves = 'ABCXYZ';
    let score = 0, win = 6, tie = 3, lose = 0;
    const rps = { 1: 'rock', 2: 'paper', 3: 'scissors' }
    array.forEach(play => {
        const theirPlay = newMoves.indexOf(play[0]) % 3 + 1;
        const myPlay = newMoves.indexOf(play[2]) % 3 + 1;
        if(theirPlay === myPlay) return score += tie + myPlay
        if(rps[theirPlay] === 'rock' && rps[myPlay] === 'scissors') return score += lose + myPlay
        if(rps[theirPlay] === 'paper' && rps[myPlay] === 'rock') return score += lose + myPlay
        if(rps[theirPlay] === 'scissors' && rps[myPlay] === 'paper') return score += lose + myPlay
        score += win + myPlay
    })
    return score
}
console.log('Part One Answer: ', findTotalPointsPlan(moves))


// the index remainder 3 is the move 
const points = {A: 1, B:2, C:3, win:6, draw:3};

// PART TWO

//A Rock      1
//B Paper     2
//C Scissors  3
//plus
//Lose          0
//Tie           3
//Win           6
//X need to Lose
//Y need to Draw
//Z need to Win

let newScore = 0
moves.forEach(el => {
    if(el[2] == 'X'){//Lose
        if(el[0] == 'A'){newScore += points.C}//Rock , Scissor
        if(el[0] == 'B'){newScore += points.A}//Paper, Rock
        if(el[0] == 'C'){newScore += points.B}//Scissors, Paper
    }
    if(el[2] == 'Y'){//Draw
        if(el[0] == 'A'){newScore += points.A + points.draw}//Rock 
        if(el[0] == 'B'){newScore += points.B + points.draw}//Paper
        if(el[0] == 'C'){newScore += points.C + points.draw}//Scissors
    }
    if(el[2] == 'Z'){//Win
        if(el[0] == 'A'){newScore += points.B + points.win}//Rock 
        if(el[0] == 'B'){newScore += points.C + points.win}//Paper
        if(el[0] == 'C'){newScore += points.A + points.win}//Scissors
    }
})
console.log('part two ', newScore)

