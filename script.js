'use strict';
// ---Var declared--->
const resetGame = document.querySelector('.again');
const hiddenNum = document.querySelector('.number');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
// const highscore = document.querySelector('.highscore').textContent;
const body = document.querySelector('body');

// const score = document.querySelector('.Lives').textContent;
// Functionality
// hiddenNumber
let number = Math.trunc(Math.random() * 20) + 1;

let Lives = 20;
let highscore = 0;
// check button
check.addEventListener('click', function () {
  if (!guess.value) {
    message.textContent = '⛔ No Number';
  } else if (guess.value == number) {
    message.textContent = '🎉 Correct Number';
    body.style.backgroundColor = '#60b347';
    hiddenNum.textContent = number;
    if (Lives > highscore) {
      document.querySelector('.highscore').textContent = Lives;
    }
  } else if (guess.value != number) {
    if (Lives > 0) {
      message.textContent =
        guess.value > number ? '🙀 Number is high' : '🙀 Number is low';
      Lives--;
      document.querySelector('.Lives').textContent = Lives;
    } else {
      message.textContent = '💥 You lost the game!';
    }
  }
});

// New game button
resetGame.addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  number = Math.trunc(Math.random() * 20) + 1;
  hiddenNum.textContent = '?';
  guess.value = '';
  document.querySelector('.Lives').textContent = 20;
  message.textContent = 'Start guessing...';
});
