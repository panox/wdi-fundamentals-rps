////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function winTimes() {
    console.log("Please choose how many wins are needed to end the game");
    return prompt();
}
var howManyTimes = winTimes();

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == "rock") {
        switch (computerMove) {
            case "rock":
            winner = "tie";
            break;
            case "scissors":
            winner = "player";
            break;
            case "paper":
            winner = "computer";
            break;
        }
    } else if (playerMove == "paper") {
         switch (computerMove) {
            case "rock":
            winner = "player";
            break;
            case "scissors":
            winner = "computer";
            break;
            case "paper":
            winner = "tie";
            break;
        }
    } else if (playerMove == "scissors") {
        switch (computerMove) {
            case "rock":
            winner = "computer";
            break;
            case "scissors":
            winner = "tie";
            break;
            case "paper":
            winner = "player";
            break;
        }
    }

    return winner;
}

function playToFive(times) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var actualWinner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < times && computerWins < times) {
        var computerChoice = getComputerMove();
        var playerChoice = getPlayerMove();
        actualWinner = getWinner(playerChoice,computerChoice);
        if (actualWinner == "player") {
            playerWins +=1;
        }
        else if (actualWinner == "computer") {
            computerWins +=1;
        }
        console.log(" ");
        console.log("Computer Chose: " + computerChoice);
        console.log("Player Chose: " + playerChoice);
        console.log("Player: " + playerWins, "Computer: " + computerWins);
        console.log(" ");
    }
    return ["Player Wins: " + playerWins,"Computer Wins: " + computerWins];
}

playToFive(howManyTimes);