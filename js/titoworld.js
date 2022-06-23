(function () {
  /* ==================== General ==================== */
  // const body = document.querySelector('body');

  /* ==================== Menu movil ==================== */
  const mobileMenuItems = document.querySelectorAll('#mobile-menu-items li');
  const mobileMenu = document.getElementById('mobile-menu-items');
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileCloseBtn = document.getElementById('close-button');

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

  /* ======================================== 
  ======================================== 
              Mis trabajos
  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 
  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

  /* ==================== Tarjeta ==================== */
  const tarjeta = document.getElementById('tarjeta');
  const tarjetaCloseBtn = document.getElementById('tarjeta-close-btn');

  tarjetaCloseBtn.addEventListener('click', () => {
    tarjeta.style.display = 'none';
  });

  /* ==================== Trabajos ==================== */

  /* Programacion */
  const trabajosProgramacion = document.querySelectorAll(
    '.trabajos-programacion-row .trabajo'
  );

  trabajosProgramacion.forEach((item) => {
    item.addEventListener('click', () => {
      if (tarjeta.style.display != 'block') {
        tarjeta.style.display = 'block';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
  /* Diseno */
  const trabajosDiseno = document.querySelectorAll(
    '.trabajos-diseno-row .trabajo'
  );

  trabajosDiseno.forEach((item) => {
    item.addEventListener('click', () => {
      if (tarjeta.style.display != 'block') {
        tarjeta.style.display = 'block';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
  //#endregion
})();
