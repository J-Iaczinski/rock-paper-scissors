const validChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return validChoices[Math.floor(Math.random() * 3)];
}

function playGame() {
  let humanScore = 0,
    computerScore = 0,
    round = 1;

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (humanScore === 5 || computerScore === 5) return;
      let computerChoice = getComputerChoice();

      result = playround(button.id, computerChoice);

      if (result === 'human') {
        humanScore++;
      } else if (result === 'computer') {
        computerScore++;
      }

      alert(`The score is:\nYou: ${humanScore} \nComputer: ${computerScore}`);
      round++;

      if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
          alert('You are the Winner!');
        } else alert('The computer are the winner!');
        humanScore = 0;
        computerScore = 0;
      }
    });
  });

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
}

playGame();
