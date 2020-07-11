console.log('it works');

const postList = document.getElementById('post-list');
const submitButton = document.querySelector('.btn-primary');
const deleteButton = document.querySelector('.btn-delete');

const newCard = document.createElement('div');
newCard.classList.add('card');
console.log(newCard);

const newImage = document.createElement('img');
newImage.src = '';
newImage.width = '';
newImage.height = '';
newImage.alt  = '';
newImage.classList.add('card-img-top');


const newCardBody = document.createElement('div');
newCardBody.classList.add('card-body');

const newHeading = document.createElement('h5');
newHeading.classList.add('card-title');

const newText = document.createElement('p');
newText.classList.add('card-text');

