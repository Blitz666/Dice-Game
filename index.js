// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const playerTurn = document.getElementById("message");
const player1ScoreBoard = document.getElementById("player1Scoreboard");
const player2ScoreBoard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn"); 

rollBtn.addEventListener('click', createRandomNumber)
 
function createRandomNumber () {
const randomNumber = Math.floor(Math.random() * 6 + 1);

if (player1Turn) {
    console.log(`player 1 rolled ${randomNumber}`);
} else 
    console.log(`player 2 rolled ${randomNumber}`); 
    
    player1Turn = !player1Turn
}
