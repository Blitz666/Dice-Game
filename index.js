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
    // console.log(`player 1 rolled ${randomNumber}`);
    
    player1Dice.innerText = randomNumber;
    
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');

    // player1Score = player1Score + randomNumber;
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    
    message.innerText = "Player 2 Turn";
} else {
    // console.log(`player 2 rolled ${randomNumber}`); 
    
    player2Dice.innerText = randomNumber;
    
    player1Dice.classList.add('active');
    player2Dice.classList.remove('active');

    // player2Score = player2Score + randomNumber;
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;

    message.innerText = "Player 1 Turn";
}

if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳"
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
} else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉"
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
 
    //  if (player1Turn) {
    //      player1Turn = false
    //  } else {
    //      player1Turn = true
    //  }
    player1Turn = !player1Turn;

}