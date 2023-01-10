import { $ } from '/js/general.js';

export function handleMenu() {
  const menuButtons = document.querySelectorAll('.btn-menu');
  const mobileMenu = $('.mobile-menu-content');
  const mobileMenuBtn = $('#mobile-menu-button');
  const mobileCloseBtn = $('.close-button');

  mobileCloseBtn.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });

  menuButtons.forEach(item => {
    item.addEventListener('click', () => {
      const btnsMenu = {
        Proyectos: 'projects',
        'Sobre mí': 'about',
        Contacto: 'contact'
      };
      mobileMenu.style.display = 'none';
      window.scroll({
        left: 0,
        top: $(`.${btnsMenu[item.innerHTML]}`).offsetTop - 96,
        behavior: 'smooth'
      });
    });
  });
}
