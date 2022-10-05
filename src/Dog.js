// Create the Dog class here
import dogs from "./data.js";

function Dog(data) {
  Object.assign(this, data);
  this.render = function () {
    return `<main class="backgroundimg-dog" style="background-image: url(${this.avatar})">
                <div class="name-age">
                    <h1>${this.name}</h1>
                    <h2${this.age}</h2>
                </div>
                <p>${this.bio}</p>
            </main>`;
  };
  this.liked = function () { 
    return ``
  }
}

export default Dog;
