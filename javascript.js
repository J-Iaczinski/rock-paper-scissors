const validChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return validChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  while (true) {
    const input = String(window.prompt('Choose between rock, paper, scissors'));

    if (!input) {
      alert('Invalid Option');
      return;
    }

    let choice = input.trim().toLowerCase();

    if (validChoices.includes(choice)) {
      return choice;
    }
  }
}

let humanChoice = getHumanChoice();
console.log(humanChoice);
let computerChoice = getComputerChoice();
console.log(computerChoice);

function playGame() {
  let humanScore,
    computerScore = 0;

  function playround(humanChoice, ComputerChoice) {
    if (humanChoice === computerChoice) {
      return console.log('You draw with the computer!');
    }

    if (
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      return console.log('You Win!');
    } else {
      computerScore++;
      return console.log('You Lose');
    }
  }
}

playround(humanChoice, computerChoice);
