'use strict';

//Getting the ids and selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//setting the scores to zero and starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEL.classList.add('hidden');

//storing scoresfor both players, which are the final scores or total that keeps accumulates
// const scores = [0, 0];

// storing the current score outside the btn event to prevent resetting the current score everytime the btn roll is clicked on
// let currentScore = 0;

//the player that is currently playing
// let activePlayer = 0;

// playing state
// let playing = true;

// declaring variables in the init function
let scores, currentScore, activePlayer, playing;

const init = function () {
  //setting scores to 0, the current score also to zero and removing the active classes but making sure the active player is the player 1 and also the starting conditions"
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEL.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//function for switxh player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //the current score has to be set to zero
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  // removing the class if it's there and if it's not , it will add the class(for switching the color)
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      // finish game
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to the next player when the game finishes
      switchPlayer();
    }
  }
});

// Resetting the game
btnNew.addEventListener('click', init);
