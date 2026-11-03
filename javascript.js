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

function playGame() {
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

  while (round <= 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    result = playround(humanChoice, computerChoice);

    if (result === 'human') {
      humanScore++;
    } else if (result === 'computer') {
      computerScore++;
    }

    alert(
      `The score is: \nYou: ${humanScore} \nComputer: ${computerScore}\nRounds Left: ${5 - round}`,
    );
    round++;
  }

  if (humanScore > computerScore) {
    alert('FINAL SCORE: YOU WIN THE GAME!');
  } else if (humanScore === computerScore) {
    alert('FINAL SCORE: YOU DRAW THE GAME!');
  } else {
    alert('FINAL SCORE: YOU LOSE THE GAME!');
  }
}

playGame();
