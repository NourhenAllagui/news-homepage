

const navbar = document.querySelector('.nav');
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menuIconOpen');
const closeMenu = document.querySelector('.closeMenu');

menu.addEventListener('click', event => {
  sidebar.style.display = 'flex';
})

closeMenu.addEventListener('click', event => {
  sidebar.style.display = 'none';
})