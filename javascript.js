// Your game is going to play against the computer


// The computer will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {

    // This generates random number between 1 to 3
    const randomNum = Math.floor(Math.random() * 3) + 1;

    // 1 is Rock, 2 is Paper, 3 is Scissors
    if (randomNum == 1) {
        return "Rock";
    } else if (randomNum == 2) {
        return "Paper";
    } else if (randomNum == 3) {
        return "Scissors";
    } else {
        return "Invalid Input";
    }
}

// random selection for the Computer


// Rock, Paper, Scissors for User
function playerSelection() {
    const randomString = prompt("Rock, Paper, or Sicssors");
    if (randomString == "Rock") {
        return "Rock";
    } else if (randomString == "Paper") {
        return "Paper";
    } else if (randomString == "Scissors") {
        return "Scissors";
    } else {
        return "Invalid Input";
    }
}

// Player's choice of Rock Paper Scissosrs


function playRound(playerSelection, computerSelection) {
    console.log(`Player chooses: ${playerSelection}`);
    console.log(`Computer chooses: ${computerSelection  }`);
    if (playerSelection == computerSelection) {
        return "It's a tie";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock Beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper Beats Rock";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors Beats Paper";
    } else {
        return "Computer Wins!";
    }
}



// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
    const playerChoice = playerSelection(); // Get the user's choice
    const computerChoice = getComputerChoice(); // Get the computer's choice
    const roundResult = playRound(playerChoice, computerChoice);

    console.log(`Round ${round}: ${roundResult}`);

    if (roundResult.includes("You Win")){
        playerScore++;
    } else if (roundResult.includes("Computer Wins")) {
        computerScore++;
    }
    console.log(`Round ${round} - Player: ${playerScore}, Computer: ${computerScore}`);
}



    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!"); 
    }

}

game();
