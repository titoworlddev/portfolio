import { $ } from '/js/general.js';

export const menuControl = () => {
  (function () {
    const menuButtons = document.querySelectorAll('.btn-menu');
    const mobileMenu = $('.mobile-menu-content');
    const mobileMenuBtn = $('#mobile-menu-button');
    const mobileCloseBtn = $('#close-button');
    mobileCloseBtn.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
    });

    mobileMenuBtn.addEventListener('click', () => {
      const tarjeta = $('#tarjeta');
      mobileMenu.style.display = 'flex';

      if (document.contains(tarjeta)) {
        tarjeta.style.display !== 'block'
          ? (tarjeta.style.display = 'none')
          : (tarjeta.style.display = 'block');
      }
    });

    menuButtons.forEach((item) => {
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
  })();
};
