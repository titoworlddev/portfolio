export const $ = (selector) => document.querySelector(selector);

export function closeMenuCard() {
  (function () {
    document.addEventListener('mouseup', function (e) {
      const mobileMenu = $('#mobile-menu-items');
      const tarjeta = $('#tarjeta');
      if (
        !mobileMenu.contains(e.target) &&
        mobileMenu.style.display !== 'none'
      ) {
        mobileMenu.style.display = 'none';
      }
      if (document.contains(tarjeta)) {
        if (!tarjeta.contains(e.target) && tarjeta.style.display !== 'none') {
          tarjeta.style.display = 'none';
        }
      }
    });
  })();
}

export const btnUpPage = () => {
  $('.portfolio').addEventListener('click', () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  });
};
