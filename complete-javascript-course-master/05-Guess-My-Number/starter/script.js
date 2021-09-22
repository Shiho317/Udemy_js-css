'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  if(!guess){
    displayMessage('Not text yet.');
  }
  else if(guess === secretNumber){
    displayMessage('🎉Correct Number!');
    
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#fff';
    document.querySelector('.number').style.width = '30rem';
      
      if(score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
      }
  }

  else if(guess > secretNumber){
    displayMessage('Too high!');

    score--;
    document.querySelector('.score').textContent = score;

    if(score < 1){
      displayMessage('👾Game Over!!');
      document.querySelector('.score').textContent = 0;
    }
  }
  else if (guess < secretNumber){
    displayMessage('Too low!');

    score--;
    document.querySelector('.score').textContent = score;

    if(score < 1){
      displayMessage('👾Game Over!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random()*20)+1;

  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

