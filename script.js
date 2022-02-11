"use strict";

// score
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
// Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   When no number / invalid number
  if (!guess || guess < 0 || guess > 20) {
    displayMessage("Please select valid number.");
  }

  //   When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number 🎉");
    document.querySelector(".number").textContent = secretNumber;

    //  Manipulating CSS
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";

    //  Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      const msg = guess > secretNumber ? "📈 Too High" : "📉 Too Low";
      displayMessage(msg);

      // score
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game.");
      document.querySelector(".score").textContent = "0";
    }
  }
});

// Again button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;

  displayMessage("Start Guessing...");

  //Style Reset
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
