export const $ = (selector) => document.querySelector(selector);

export function closeMenuCard() {
  (function () {
    document.addEventListener('mouseup', function (e) {
      const mobileMenu = $('.mobile-menu-content');
      const tarjetaContainer = $('.tarjeta-container');
      const tarjeta = $('#tarjeta');

      if (e.target !== mobileMenu && mobileMenu.style.display !== 'none')
        mobileMenu.style.display = 'none';

      if (e.target !== tarjeta && tarjetaContainer.style.display !== 'none')
        tarjetaContainer.style.display = 'none';
    });
  })();
}

export const btnUpPage = () => {
  document.querySelectorAll('.portfolio').forEach((item) => {
    item.addEventListener('click', () => {
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    });
  });
};
