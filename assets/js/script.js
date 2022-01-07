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

function game() {
  let playerSelection;
  let computerSelection;
  let scores = [0, 0];
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(`Choose "rock", "paper" or "scissors".`);
    computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      scores[0]++;
    }
    if (result.includes("lose")) {
      scores[1]++;
    } else {
      scores;
    }
    console.log("*************");
    console.log(result);
    console.log(`You: ${scores[0]} Computer: ${scores[1]}`);
  }
  if (scores[0] === scores[1]) {
    console.log("You tied with the computer!");
  }
  if (scores[0] > scores[1]) {
    console.log("You beat the computer!");
  } else {
    console.log("You lost to the computer!");
  }
}

game();
