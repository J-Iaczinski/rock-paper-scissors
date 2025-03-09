// This is the JavaScript

humanScore = 0;
computerScore = 0;

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    choice = "rock";
  } else if (choice === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  choice = prompt("Choose between 'rock', 'paper', 'scissors': ");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice.toUpperCase()) {
    case "ROCK":
      if (computerChoice == "paper") {
        console.log("Computer Wins, Paper wins against Rock");
        computerScore++;
      } else if (computerChoice == "rock") {
        console.log("Thats a Tie!");
      } else {
        console.log("Player Wins, Rock wins agains Scissors");
        humanScore++;
      }
  }
}

playRound(getHumanChoice(), "paper");
console.log(humanScore);
