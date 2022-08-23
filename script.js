// VARIABLES
const card = document.querySelector('.js_card');

const title = document.querySelector('.js_title');

const link = document.querySelector('.js_link');

const cardContent = document.querySelector('.js_cardContent');


// FUNCTIONS



// HANDLE FUNCTIONS

const handleClickCard = () => {

  card.classList.toggle('card');
  card.classList.toggle('card--open');

  title.classList.toggle('title');
  title.classList.toggle('title--open');

  link.classList.toggle('link');
  link.classList.toggle('link--open');

  cardContent.classList.toggle('content');
  cardContent.classList.toggle('content--open');

  /* cardContent.classList.toggle('hidden'); */

};



// LISTENERS

card.addEventListener('click', handleClickCard);