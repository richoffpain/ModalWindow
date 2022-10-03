'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');
const showbtn = document.querySelectorAll('.show-modal');

const showmodal = function(){
  /*  console.log('Button clicked'); */
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0; i<showbtn.length; i++)
showbtn[i].addEventListener('click', showmodal)

const closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closebtn.addEventListener('click', closemodal);

overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closemodal();
        }
    }
    
})