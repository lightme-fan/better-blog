console.log('it works');

// Grabbing elements
const postList = document.getElementById('post-list');
const submitButton = document.querySelector('.btn-primary');
const deleteButton = document.querySelector('.btn-delete');
const heading = document.querySelector('#postTitle');
const postContent = document.querySelector('textarea');
const image = document.querySelector(`[name= "postImg"]`);
const hideForm = document.querySelector('#show-form');
const postForm = document.querySelector('form');
const errorMessage = document.querySelector('#error-message');
const author = document.querySelector(`[name= 'postAuthor']`);


    

    
submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();

    // New div for the card
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    // Creating an image element
    const newImage = document.createElement('img');
    newImage.src = 'https://picsum.photos/500/200';
    newImage.alt = 'Card image cap';
    newImage.classList.add('card-img-top');

    // This is the element of the card body
    const newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');

    // New heading
    const newHeading = document.createElement('h5');
    newHeading.classList.add('card-title');
    
    // New content 
    const newText = document.createElement('p');
    newText.classList.add('card-text');

    // Adding button element
    const deleteElement = document.createElement('button');
    deleteElement.setAttribute('type', 'button');
    deleteElement.classList.add('btn', 'btn-sm', 'btn-light', 'btn-delete');
    deleteElement.textContent = 'Delete entry';

    // adding Date
    const dateToday = new Date();
    const dd = String(dateToday.getDate()).padStart(2, '0');
    const mm = String(dateToday.getMonth() + 1).padStart(2, '0');
    const yyyy = dateToday.getFullYear();
    // dateToday = dd + '/' + mm + '/' + yyyy;

    // Adding Author
    const newAuthor = document.createElement('div');
    newAuthor.classList.add('author');

    // Appending the element to be inside of the post list
    newCardBody.appendChild(newHeading);
    newCardBody.appendChild(newText);
    newCardBody.appendChild(newAuthor);
    newCardBody.appendChild(deleteElement);
    newCard.appendChild(newImage);
    newCard.appendChild(newCardBody);
    postList.appendChild(newCard);
    console.log(postList);

    newHeading.textContent = `${heading.value}`;
    newText.textContent = `${postContent.value}`;
    newImage.textContent = `${image.value}`;
    newAuthor.textContent = `${author.value}`;

    postForm.reset();

})
    
    
submitButton.addEventListener('click', ($event) => {   
    if (postContent.value.length < 20) {
        const feedack = document.createElement('div');
        feedack.classList.add('invalid-feedBack')
        feedack.textContent = 'invalid feedback';
        errorMessage.classList.remove('hidden');
    } else {
        postContent.classList.remove('is-invalid');
        errorMessage.classList.add('hidden');
    }
}); 


//Hiding the form field
hideForm.addEventListener('click', ($e) => {
    $e.preventDefault();
    if (hideForm.style.display = 'none') {
        hideForm.textContent = 'Hide form';
        postForm.style.display = 'none';
    } else {
        hideForm.textContent = 'Add a post';
        hideForm.style.display = 'block';
    }
});

// if (postContent.value.length < 20) {
//     postContent.classList.add('is-invalid');
//     errorMessage.classList.remove();
//  }
