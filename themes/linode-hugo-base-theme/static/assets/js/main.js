// Navigation Toggle

const mainMenu = document.getElementById('main-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileClass = 'open';

function toggleNav() {
  if (!mainMenu.classList.contains(mobileClass)) {
    mainMenu.classList.add(mobileClass);
    menuIcon.classList.add(mobileClass);
  }
  else {
    mainMenu.classList.remove(mobileClass);
    menuIcon.classList.remove(mobileClass);
  }
}