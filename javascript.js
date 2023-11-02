// Your game is going to play against the computer, so begin with a function called getComputerChoice

// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(playerSelection, computerSelection) {

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

const computerSelection = getComputerChoice;
console.log(getComputerChoice(playerSelection, computerSelection));

const playerSelection = prompt();

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {

}