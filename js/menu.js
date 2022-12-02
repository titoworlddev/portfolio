import { $ } from '/js/general.js';

export const menuControl = () => {
  (function () {
    const menuButtons = document.querySelectorAll('.btn-menu');
    const mobileMenu = $('#mobile-menu-items');
    const mobileMenuBtn = $('#mobile-menu-button');
    const mobileCloseBtn = $('#close-button');
    mobileCloseBtn.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
    });

    mobileMenuBtn.addEventListener('click', () => {
      const tarjeta = $('#tarjeta');
      mobileMenu.style.display = 'flex';
      if (document.contains(tarjeta)) {
        if (tarjeta.style.display !== 'block') {
          tarjeta.style.display = 'none';
        } else {
          tarjeta.style.display = 'block';
        }
      }
    });

    menuButtons.forEach((item) => {
      item.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        window.scroll({
          left: 0,
          top: $(`.${item.innerHTML.toLowerCase()}`).offsetTop - 96,
          behavior: 'smooth'
        });
      });
    });
  })();
};
