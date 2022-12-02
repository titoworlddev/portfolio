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

export const aboutMe = () => {
  let currentDate = new Date();
  let myBirthdate = new Date(1991, 10, 20);
  let myCurrentAge = $('#my-current-age');
  myCurrentAge.innerHTML =
    currentDate.getFullYear() - myBirthdate.getFullYear();
};
