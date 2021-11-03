
const header_container = document.getElementById('showcase');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

document.addEventListener('DOMContentLoaded', makeSquare);
document.addEventListener('DOMContentLoaded', scrollTop);

function scrollTop() {
  document.documentElement.scrollTop = 0;
}

