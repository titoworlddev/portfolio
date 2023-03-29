export function handleMenu() {
  const menuButtons = document.querySelectorAll('.btn-menu');
  const mobileMenu = document.querySelector('.mobile-menu-content');
  const mobileMenuBtn = document.querySelector('#mobile-menu-button');
  const mobileCloseBtn = document.querySelector('.close-button');

  mobileCloseBtn.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });

  menuButtons.forEach(item => {
    item.addEventListener('click', e => {
      const btnsMenu = {
        Proyectos: 'projects',
        'Sobre mí': 'about',
        Contacto: 'contact'
      };
      mobileMenu.style.display = 'none';
      window.history.pushState(null, null, `#${btnsMenu[item.innerHTML]}`);
      window.scroll({
        left: 0,
        top:
          document.querySelector(`.${btnsMenu[item.innerHTML]}`).offsetTop - 96,
        behavior: 'smooth'
      });
    });
  });
}
