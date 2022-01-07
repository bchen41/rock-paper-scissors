function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[generateRandomNumber(0, choices.length - 1)];
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  if (playerSelectionLowerCase === computerSelection) {
    return `You tied!`;
  }
  if (playerSelectionLowerCase === "rock") {
    if (computerSelection === "paper") {
      return `You lose! Paper beats rock!`;
    } else {
      return `You win! Rock beats scissors!`;
    }
  }
  if (playerSelectionLowerCase === "paper") {
    if (computerSelection === "scissors") {
      return `You lose! Scissors beat paper!`;
    } else {
      return `You win! Paper beats rock!`;
    }
  }
  if (playerSelectionLowerCase === "scissors") {
    if (computerSelection === "rock") {
      return `You lose! Rock beats scissors!`;
    } else {
      return `You win! Scissors beat paper!`;
    }
  }
}
