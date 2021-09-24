'use strict';
console.log('hello js');

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const scoreE0 = document.querySelector('#score--0');
const scoreE1 = document.querySelector('#score--1');
const currentE0 = document.querySelector('#current--0');
const currentE1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function(){
scores = [0,0];
currentScore = 0;
activePlayer = 0;
playing = true;


scoreE0.textContent = 0;
scoreE1.textContent = 0;
currentE0.textContent = 0;
currentE1.textContent =0;

dice.classList.add('hidden');
playerEl0.classList.add('player--active');
playerEl1.classList.remove('player--active');
playerEl0.classList.remove('player--winner');
playerEl1.classList.remove('player--winner');

};
init();

const switchPlayer = function(){
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore =0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function(){
  if(playing){

  const diceNumber = Math.trunc(Math.random()*6)+1;
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;


//player--1
if(diceNumber !== 1){
  currentScore += diceNumber;
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

}else{
  switchPlayer();
}

  }
});

btnHold.addEventListener('click', function(){
  if(playing){

    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20){
      playing = false;
      dice.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
      switchPlayer();
    }
  }
})

btnNew.addEventListener('click', init);









