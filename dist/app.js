
const header_container = document.getElementById('showcase');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

document.addEventListener('DOMContentLoaded', makeSquare);
document.addEventListener('DOMContentLoaded', scrollTop);

function scrollTop() {
  document.documentElement.scrollTop = 0;
}

const images = document.querySelectorAll('.anim');
const wipeAni = document.querySelectorAll('.wipe-ani');

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > .0025) {
      entry.target.style.animation = `flyin 500ms ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = 'none';
    }
  })
})

wipeAniObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.childNodes.forEach(child => {
        if (child.nodeType !== 3) {
          child.classList.add('anim2')
        }
      })
    } else {
      entry.target.childNodes.forEach(child => {
        if (child.nodeType !== 3) {
          child.classList.remove('anim2')
        }
      })
    }
  })
})

images.forEach(image => {
  observer.observe(image);
})

wipeAni.forEach(image => {
  wipeAniObserver.observe(image);
})

