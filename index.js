import dogs from './data.js';
import Dog from './Dog.js';
let dogsArray = ['Rex', 'Bella', 'Teddy'];
document.getElementById('heart-button').addEventListener('click', like);
document.getElementById('cross-button').addEventListener('click', decline);

function getNewDog() {
  const nextDogData = dogs[dogsArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
}

function like() {
  document.querySelector('.like-badge-icon').style.display = 'inline-block';
  dog.hasBeenLiked = true;
  dog.hasBeenSwiped = true;
  setTimeout(() => {
    dog = getNewDog();
    render();
  }, 1500);
}

function decline() {
  document.querySelector('.no-badge-icon').style.display = 'inline-block';
  dog.hasBeenSwiped = true;
  setTimeout(() => {
    dog = getNewDog();
    render();
  }, 1500);
}

function render() {
  document.getElementById('dog-container').innerHTML = dog.getDogHtml();
}

let dog = getNewDog();
render();
