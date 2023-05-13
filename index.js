import dogs from './data.js';
import Dog from './Dog.js';
let dogsArray = ['Rex', 'Bella', 'Teddy'];
function getNewDog() {
  const nextDogData = dogs[dogsArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
}

function render() {
  document.getElementById('main-container').innerHTML = dog.getDogHtml();
}
let dog = getNewDog();
render();
