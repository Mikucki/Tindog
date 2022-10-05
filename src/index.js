import Dog from "./Dog.js";
import dogs from "./data.js";
const buttonNo = document.getElementById("buttonNo");
const buttonYes = document.getElementById("buttonYes");
const profile = document.getElementById("profile");

let dog1 = new Dog(dogs[0]);
let dog2 = new Dog(dogs[1]);
let dog3 = new Dog(dogs[2]);
let arrOfDogs = [dog1, dog2, dog3];
let counter = 0;

buttonYes.addEventListener("click", function () {
  profile.classList.remove("backgroundimg-dog");
  console.log(counter);
  counter++;
  if (counter === arrOfDogs.length) {
    counter = 0;
  }

  profile.innerHTML = arrOfDogs[counter].render();
});

buttonNo.addEventListener("click", function () {
  profile.classList.remove("backgroundimg-dog");
  console.log(counter);
  counter--;
  if (counter === -1) {
    counter = 2;
  }
  profile.innerHTML = arrOfDogs[counter].render();
});
