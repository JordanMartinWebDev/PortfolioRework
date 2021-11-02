const images = document.querySelectorAll('.anim');
const wipeAni = document.querySelectorAll('.wipe-ani');

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
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