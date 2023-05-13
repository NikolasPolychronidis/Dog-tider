import dogs from './data.js';
class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="dog-container">
        <img
          src="./images/badge-like.png"
          alt="No badge"
          class="like-badge-icon"
        />
        <img
          src="./images/badge-nope.png"
          alt="No badge"
          class="no-badge-icon"
        />
        <img
          class="dog-image"
          src="${avatar}"
          alt="Image of a dogs profile pic"
        />
        <div class="dog-caption">
          <h1 class="dog-name">${name}, ${age}</h1>
          <p class="dog-greeting">${bio}</p>
        </div>
      </div>
      <div class="buttons-container">
        <div class="decline-button">
          <img
            src="./images/icon-cross.png"
            alt="Cross icon"
            class="button-icon"
          />
        </div>
        <div class="like-button">
          <img
            src="./images/icon-heart.png"
            alt="Heart icon"
            class="button-icon"
          />
        </div>
      </div>`;
  }
}
export default Dog;
