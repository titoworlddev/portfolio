(function () {
  /* ==================== General ==================== */
  document.addEventListener('mouseup', function (e) {
    if (!tarjeta.contains(e.target)) {
      if (tarjeta.style.display != 'none') {
        tarjeta.style.display = 'none';
      }
    } else {
      tarjeta.style.display = 'block';
    }
  });

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
    if (tarjeta.style.display != 'block') {
      tarjeta.style.display = 'block';
    } else {
      tarjeta.style.display = 'none';
    }
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
  function getTarjetaInfo(item) {
    switch (item.querySelector('p').innerText) {
      case 'Random X':
        tarjeta.querySelector('#titulo-tarjeta').innerHTML = 'Random X';
        tarjeta.querySelector('#texto-tarjeta').innerHTML =
          'Random X es tu ayudante a la hora de jugar y/o divertirte con amigos, sus generadores aleatorios te brindan opciones para elegir de forma aleatoria quien paga la cena, hacer el amigo invisible con amigos o familiares, hacer un bingo, jugar a tu propio Scattergories o lo que se te ocurra. Sin duda el compañero perfecto en estos casos, no esperes más y que empiece la diversión.';
        tarjeta.querySelector('.fotos-tarjeta img').src =
          '../assets/img/trabajos/random_x/randomx_presentation.png';
        break;
      case 'Operit':
        tarjeta.querySelector('#titulo-tarjeta').innerHTML = 'Operit';
        tarjeta.querySelector('#texto-tarjeta').innerHTML =
          'Calculadora con diseño simple pero muy completa en sus funciones.Si buscas hacer operaciones rápidas tienes su parte básica, si por el contrario eres un usuario más avanzado puedes usar la calculadora científica.También hay varios ajustes para personalizar la app a tu gusto y una página de ayuda por si no comprendes alguna de las funciones.¡Sin duda una calculadora que será fácil y divertida de usar, disfrútala!';
        tarjeta.querySelector('.fotos-tarjeta img').src =
          '../assets/img/trabajos/random_x/randomx_presentation.png';
        break;
      case 'Game Zone':
        tarjeta.querySelector('#titulo-tarjeta').innerHTML = 'Game Zone';
        tarjeta.querySelector('#texto-tarjeta').innerHTML =
          'Continuando con los diseños aqui dejo uno nuevo, en este caso de una aplicacion de movil sobre una tienda de videojuegos, que tambien podria servir como base para una tienda en general. Espero que os guste.';
        tarjeta.querySelector('.fotos-tarjeta img').src =
          '../assets/img/trabajos/random_x/randomx_presentation.png';
        break;
      case 'El Chingón':
        tarjeta.querySelector('#titulo-tarjeta').innerHTML = 'El Chingón';
        tarjeta.querySelector('#texto-tarjeta').innerHTML =
          'Continuando con los diseños aqui dejo uno nuevo, en este caso de una aplicacion de movil sobre una tienda de videojuegos, que tambien podria servir como base para una tienda en general. Espero que os guste.';
        tarjeta.querySelector('.fotos-tarjeta img').src =
          '../assets/img/trabajos/random_x/randomx_presentation.png';
        break;
      case "L'evasion":
        tarjeta.querySelector('#titulo-tarjeta').innerHTML = "L'evasion";
        tarjeta.querySelector('#texto-tarjeta').innerHTML =
          'Continuando con los diseños aqui dejo uno nuevo, en este caso de una aplicacion de movil sobre una tienda de videojuegos, que tambien podria servir como base para una tienda en general. Espero que os guste.';
        tarjeta.querySelector('.fotos-tarjeta img').src =
          '../assets/img/trabajos/random_x/randomx_presentation.png';
        break;

      default:
        tarjeta.querySelector('#titulo-tarjeta').innerHTML = 'Trabajo';
        tarjeta.querySelector('#texto-tarjeta').innerHTML =
          'Esta es una tarjeta por defecto';
        tarjeta.querySelector('.fotos-tarjeta img').src =
          '../assets/img/trabajos/trabajo.png';
        break;
    }
  }

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
      getTarjetaInfo(item);
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
      getTarjetaInfo(item);
    });
  });

  //#endregion
})();
