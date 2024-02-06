/*
Codewars 8 Kyu Rock Paper Scissors!
URL: https://www.codewars.com/kata/5672a98bdbdd995fad00000f

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
    const rules = {
        'rock':'scissors',
        'scissors':'paper',
        'paper':'rock'
    };

    return (p1 === p2) ? "Draw!" :  `Player ${(rules[p1] === p2) ? '1' : '2'} won!`;
};

console.log(rps("rock", "scissors"));