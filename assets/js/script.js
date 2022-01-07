function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[generateRandomNumber(0, choices.length - 1)];
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
