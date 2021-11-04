const body = document.getElementById('body');
const toggle = document.querySelector('.ld-toggle');

toggle.addEventListener('click', (e) => {

  if (body.classList.contains('light')) {
    body.classList.remove('light')
    toggle.classList.remove('t-dark')
    toggle.classList.add('t-light')

  } else {
    body.classList.add('light');
    toggle.classList.remove('t-light')
    toggle.classList.add('t-dark')
  }

  e.preventDefault;
});