const validChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return validChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playround(button.id, computerChoice);
    });
  });
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let humanScore = 0,
  computerScore = 0,
  round = 1;

function playround(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert('You Draw this Round!');
    return 'draw';
  }
  if (
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    alert('You Win this Round!');
    return 'human';
  } else {
    alert('You Lose this Round!');
    return 'computer';
  }
}
