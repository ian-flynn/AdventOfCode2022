const fs = require('fs');
const moves = fs.readFileSync(`${__dirname}/input`).toString().split('\n');
// console.log(moves)
//A X Rock      1
//B Y Paper     2
//C Z Scissors  3
//plus
//Lose          0
//Tie           3
//Win           6
//X beats C loses to B
//Y beats A loses to C
//Z beats B loses to A
const points = {A: 1, B:2, C:3, win:6, draw:3};
let score = 0
moves.forEach(el => {
    if(el[0] == 'A'){//Rock
        if(el[2] == 'X'){score += points.draw + points.A}//Rock tie
        if(el[2] == 'Y'){score += points.win + points.B}//Paper win
        if(el[2] == 'Z'){score += points.C}//Scissors lose
    }
    if(el[0] == 'B'){//Paper
        if(el[2] == 'X'){score += points.A}//Rock lose
        if(el[2] == 'Y'){score += points.draw + points.B}//Paper tie
        if(el[2] == 'Z'){score += points.win + points.C}//Scissors win
    }
    if(el[0] == 'C'){//Scissors
        if(el[2] == 'X'){score += points.win + points.A}//Rock win
        if(el[2] == 'Y'){score += points.B}//Paper lose
        if(el[2] == 'Z'){score += points.draw + points.C}//Scissors tie
    }
})
console.log(score)

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
console.log(newScore)

