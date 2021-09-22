'use strict';

console.log('hello js');

const modalBtn = document.querySelector('.modal');
const showModalBtn = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const openModal = function(){
  modalBtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for(let i = 0; i < showModalBtn.length; i++){
  showModalBtn[i].addEventListener('click', openModal)
};

const closeModal = function(){
  modalBtn.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeBtn.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

modalBtn.addEventListener('click', closeModal)

document.addEventListener('keydown', function(events){

  if(events.key === ' ' && !modalBtn.classList.contains('hidden')){
      closeModal();
  }
});