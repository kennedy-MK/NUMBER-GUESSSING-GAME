'use strict';

/*
document.querySelector('.message').textContent = 'high score';

document.querySelector('.number').textContent = 22;

document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
// EVENT HANDLING CLICK CHECK
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // generates random numbers without decimals from 1-19 because of truncing hence we add 1 at the end

let score = 20; // it can be referred to as state variable
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // accessing the numbrt in the textbox and then convert it into a number because user input is always a string
  console.log(guess, typeof guess);

  if (!guess) {
    // checking if there is nothing in the input box
    displayMessage('No number');
    //document.querySelector('.message').textContent = 'No number';
  } // when gues is correct and player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct number';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber; // displaying the correct number
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      //checking if current score is greater than current score, and making the highscore to become the current score
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Too High go lower' : 'Too low go Higher'
      );
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too High go lower' : 'Too low go Higher';
      score--; // we decrease the value of the score whenever we give a wrong gu
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost');
      //document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is greater thatn the secret number
  // else if (guess > secretNumber) {
  // if (score > 1) {
  // document.querySelector('.message').textContent =
  // 'Thats too high go lower';
  // score--; // we decrease the value of the score whenever we give a wrong gues.
  // document.querySelector('.score').textContent = score;
  // } else {
  // document.querySelector('.message').textContent = 'you lost';
  // }
  // guess is too low
  // } else if (guess < secretNumber) {
  // if (score > 1) {
  //avoiding negative numbers
  // document.querySelector('.message').textContent =
  // 'Thats too low go a bit higher';
  // score--; // decreased the score and then display it
  // document.querySelector('.score').textContent = score; //updating the score value
  // } else {
  // document.querySelector('.message').textContent = 'You Lost!';
  // }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
