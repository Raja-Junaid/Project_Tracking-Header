const openMenu = document.querySelector('.nav-hamburger');
const closeMenu = document.querySelector('.nav-close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', function () {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  openMenu.classList.add("hidden")
  closeMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', function () {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  openMenu.classList.remove("hidden")
  closeMenu.classList.add('hidden');
});