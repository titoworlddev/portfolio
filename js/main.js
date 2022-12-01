(function () {
  const $ = (selector) => document.querySelector(selector);

  /* ==================== General ==================== */
  document.addEventListener('mouseup', function (e) {
    const tarjeta = document.getElementById('tarjeta');
    if (!mobileMenu.contains(e.target) && mobileMenu.style.display !== 'none') {
      mobileMenu.style.display = 'none';
    }
    if (document.contains(tarjeta)) {
      if (!tarjeta.contains(e.target) && tarjeta.style.display !== 'none') {
        tarjeta.style.display = 'none';
      }
    }
  });

  /* Menu */
  const menuButtons = document.querySelectorAll('.btn-menu');
  const mobileMenu = document.getElementById('mobile-menu-items');
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileCloseBtn = document.getElementById('close-button');

  mobileCloseBtn.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });

  mobileMenuBtn.addEventListener('click', () => {
    const tarjeta = document.getElementById('tarjeta');
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
      window.scrollTo(0, $(`.${item.innerHTML.toLowerCase()}`).offsetTop - 96);
    });
  });

  /* Imagenes */
  // Creo que si funciona
  const images = [
    '../assets/img/trabajos/random_x/randomx-presentation.png',
    '../assets/img/trabajos/random-x.png',
    '../assets/img/trabajos/store-badges/google-play-badge.svg',
    '../assets/img/trabajos/operit/operit-presentation.png',
    '../assets/img/trabajos/operit.png',
    '../assets/img/trabajos/game_zone/game-zone-presentation.png',
    '../assets/img/trabajos/game-zone-store.png',
    '../assets/img/trabajos/el_chingon/el-chingon-presentation.png',
    '../assets/img/trabajos/el-chingon.png',
    '../assets/img/trabajos/store-badges/instagram-logo.svg',
    '../assets/img/trabajos/levasion/levasion-presentation.png',
    '../assets/img/trabajos/levasion.png'
  ];
  const cachedImages = [];

  images.forEach((elem) => {
    cachedImages.push(document.createElement('img'));
    cachedImages.at(-1).src = elem;
  });

  let currentDate = new Date();
  let myBirthdate = new Date(1991, 10, 20);
  let myCurrentAge = $('#my-current-age');
  myCurrentAge.innerHTML =
    currentDate.getFullYear() - myBirthdate.getFullYear();
})();
