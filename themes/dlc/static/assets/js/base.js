// Navigation Toggle
function toggleNav() {
  const mainMenu = document.getElementById('main-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileClass = 'open';
  if (!mainMenu.classList.contains(mobileClass)) {
    mainMenu.classList.add(mobileClass);
    menuIcon.classList.add(mobileClass);
    mainMenu.setAttribute('aria-expanded', 'true');
  }
  else {
    mainMenu.classList.remove(mobileClass);
    menuIcon.classList.remove(mobileClass);
    mainMenu.setAttribute('aria-expanded', 'false');
  }
}