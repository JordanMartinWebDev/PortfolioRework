const header_container = document.getElementById('showcase');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

document.addEventListener('DOMContentLoaded', makeSquare);

function makeSquare() {
  header_container.insertAdjacentHTML("afterbegin",
    `
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  `
  )
  const squares = document.getElementsByClassName('c');

  for (var i = 0; i < squares.length; i++) {

    // shortcut! the current div in the list
    var Square = squares[i];

    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    // update top and left position
    Square.style.top = randomTop + "px";
    Square.style.left = randomLeft + "px";

  }

  setTimeout(() => {
    removeSquare();
  }, 3000);


}

function removeSquare() {
  header_container.querySelectorAll('.c').forEach(function (a) { a.remove() });

  makeSquare();
}

function getRandomNumber(min, max) {

  return Math.random() * (max - min) + min;

}
