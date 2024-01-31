'use strict';

//Getting the ids and selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//setting the scores to zero and starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // 3. check for rolled 1: if true, switch to next player
});
