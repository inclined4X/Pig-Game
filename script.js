'use strict';

//Getting the ids and selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//setting the scores to zero and starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

//storing scoresfor both players, which are the final scores or total that keeps accumulates
const scores = [0, 0];

// storing the current score outside the btn event to prevent resetting the current score everytime the btn roll is clicked on
let currentScore = 0;

//the player that is currently playing
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice;
    //select the current player, than using the player 0 as the active constant player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    current0El.textContent = currentScore; //Change later
  } else {
    // Switch to next player
  }
});
