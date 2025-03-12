// This is the JavaScript

const btns = document.querySelectorAll(".btn-img");
console.log(btns);

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

function playRound(humanChoice, computerChoice) {
  switch (humanChoice.toUpperCase()) {
    case "ROCK":
      if (computerChoice == "paper") {
        computerScore++;
        document.querySelector(".scoreCPU").innerHTML = `${computerScore}`;
      } else if (computerChoice == "rock") {
        alert("Thats a Tie!");
      } else {
        humanScore++;
        document.querySelector(".scoreHuman").innerHTML = `${humanScore}`;
      }
      break;
    case "PAPER":
      if (computerChoice == "paper") {
        alert("Thats a Tie!");
      } else if (computerChoice == "rock") {
        humanScore++;
        document.querySelector(".scoreHuman").innerHTML = `${humanScore}`;
      } else {
        computerScore++;
        document.querySelector(".scoreCPU").innerHTML = `${computerScore}`;
      }
      break;
    case "SCISSORS":
      if (computerChoice == "paper") {
        humanScore++;
        document.querySelector(".scoreHuman").innerHTML = `${humanScore}`;
      } else if (computerChoice == "rock") {
        computerScore++;
        document.querySelector(".scoreCPU").innerHTML = `${computerScore}`;
      } else {
        alert("Thats a Tie!");
      }
      break;
  }
}

function playGame() {
  btns.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      let humanChoice = e.target.id;
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
      if (humanScore === 5) {
        console.clear();
        alert("HUMAN WINS!! \n\n");
        humanScore = 0;
        computerScore = 0;
        document.querySelector(".scoreHuman").innerHTML = `${humanScore}`;
        document.querySelector(".scoreCPU").innerHTML = `${computerScore}`;
      } else if (computerScore === 5) {
        console.clear();
        alert("COMPUTER WINS!! \n\n");
        humanScore = 0;
        computerScore = 0;
        document.querySelector(".scoreHuman").innerHTML = `${humanScore}`;
        document.querySelector(".scoreCPU").innerHTML = `${computerScore}`;
      }
    });
  });
}

playGame();
