var mobileMenuItems = document.querySelectorAll('#mobile-menu-items li');
var mobileMenu = document.getElementById('mobile-menu-items');
var mobileMenuBtn = document.getElementById('mobile-menu-button');
var mobileCloseBtn = document.getElementById('close-button');

mobileCloseBtn.addEventListener('click', function () {
  mobileMenu.style.display = 'none';
});

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

mobileMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    console.log('Funciona');
  });
});
