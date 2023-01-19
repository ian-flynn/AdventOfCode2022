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

let score = 0
moves.forEach(el => {
    if(el[0] == 'A'){//Rock
        if(el[2] == 'X'){score += 4}//Rock tie
        if(el[2] == 'Y'){score += 8}//Paper win
        if(el[2] == 'Z'){score += 3}//Scissors lose
    }
    if(el[0] == 'B'){//Paper
        if(el[2] == 'X'){score += 1}//Rock lose
        if(el[2] == 'Y'){score += 5}//Paper tie
        if(el[2] == 'Z'){score += 9}//Scissors win
    }
    if(el[0] == 'C'){//Scissors
        if(el[2] == 'X'){score += 7}//Rock win
        if(el[2] == 'Y'){score += 2}//Paper lose
        if(el[2] == 'Z'){score += 6}//Scissors tie
    }
})
console.log(score)
