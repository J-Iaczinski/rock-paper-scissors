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
        console.log("Player Wins, Rock wins against Scissors");
        humanScore++;
      }
      break;
    case "PAPER":
      if (computerChoice == "paper") {
        console.log("Thats a Tie!");
      } else if (computerChoice == "rock") {
        console.log("Player Wins, Paper wins against Rocks");
        humanScore++;
      } else {
        console.log("Computer Wins, Paper loses against Scissors");
        computerScore++;
      }
      break;
    case "SCISSORS":
      if (computerChoice == "paper") {
        console.log("Player Wins, Paper wins against Rocks");
        humanScore++;
      } else if (computerChoice == "rock") {
        console.log("Computer Wins, Paper loses against Rock");
        computerScore++;
      } else {
        console.log("Thats a Tie!");
      }
      break;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(
      `Human Score: ${humanScore} \nComputer Score: ${computerScore}\n\n`
    );
  }
}

playGame();
