// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const myUl = document.createElement('ul');
// add three list items with the words "one, two three" in them
const myHTML = `
    <li>one</li>
    <li>two</li>
    <li>three</li>
`;
myUl.insertAdjacentHTML('afterbegin', myHTML);
//myUl.innerHTML = myHTML;
// put that list into the above wrapper
document.body.insertAdjacentElement('afterbegin', myUl);
// create an image
const myImg = document.createElement('img');
const imgSize = 200;
// set the source to an image
myImg.setAttribute('src', `https://picsum.photos/${imgSize}`);
//myImg.src = `https://picsum.photos/${imgSize}`;
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'cute pic';
// Append that image to the wrapper
myDiv.appendChild(myImg);
// with HTML string, make a div, with two paragraphs inside of it
const myHTMLString = `
    <div id="warningDiv">
        <p>one</p>
        <p>two</p>
    </div>
`;
// put this div before the unordered list from above
document.body.insertAdjacentHTML('afterbegin', myHTMLString);
// add a class to the second paragraph called warning
const warningDiv = document.querySelector('#warningDiv');
warningDiv.children[1].classList.add('warning');
// remove the first paragraph
warningDiv.children[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
	return `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years, this person would be ${
		age * 7
	}. That would be a tall dog!</p>
    <button>Delete</button>
        </div> 
    `;
};
const deleteButton = document.createElement('button');
deleteButton.textContent = 'delete';
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');
// Have that function make 4 cards
const firstCard = generatePlayerCard('bully', 3, '70 cm');
const secondCard = generatePlayerCard('skinny', 2, '50 cm');
const thirdCard = generatePlayerCard('dols', 3, '70cm');
const fourthCard = generatePlayerCard('Milou', 1, '30cm');
// append those cards to the div
//cardDiv.insertAdjacentHTML('afterbegin', firstCard + secondCard + thirdCard + fourthCard);
cardDiv.innerHTML = firstCard + secondCard + thirdCard + fourthCard;
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardDiv);
// const playerCards = document.querySelectorAll('.playerCard');
// console.log(playerCards);
// playerCards.forEach((card) => {
// 	card.innerHTML += `<button>Delete</button>`;
// });
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// add a delete button in the function DONE
// select all the buttons!
const deleteButtons = document.querySelectorAll('button');
// make out delete function ($event)
const deleteFunction = ($event) => {
	$event.currentTarget.parentElement.remove();
};
// way to delete the card : $event.currentTarget.parentElement.remove();
// loop over them and attach a listener
deleteButtons.forEach((button) => {
	button.addEventListener('click', deleteFunction);
});





