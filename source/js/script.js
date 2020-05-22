var header = document.querySelector('.page-header');
var toggle = header.querySelector('.page-header__toggle');

header.classList.remove('page-header--no-js');

toggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  header.classList.toggle('page-header--opened');
});