'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🏆 Correct Number';

document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 16;

*/

/// Guess My Number Project

let secretNumber = Math.trunc(Math.random() * 100) + 1;
document.querySelector('.number').textContent;
let score = 10;
let highscore = 0;

//Function for messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Onclick Event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When There is no Input
  if (!guess) {
    displayMessage(`⛔ Not a number!`);

    // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage(`🏆 Correct Number! You Won`);
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //  if (Math.abs(secretNumber - guess) < 3) {
      //    displayMessage('So close');
      //  } else {

      // }
      displayMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`😞 You Lost The Game`);
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = `#b73226`;
      document.querySelector('.number').style.width = `30rem`;
    }
  }
});

// Play Again Button

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = `#111`;
  document.querySelector('.number').style.width = `15rem`;
});
