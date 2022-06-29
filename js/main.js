;(function () {
  /* ==================== General ==================== */
  document.addEventListener('mouseup', function (e) {
    if (!tarjeta.contains(e.target)) {
      if (tarjeta.style.display !== 'none') {
        tarjeta.style.display = 'none'
      }
    } else {
      tarjeta.style.display = 'block'
    }
  })

  /* ==================== Menu movil ==================== */
  const mobileMenuItems = document.querySelectorAll('#mobile-menu-items li')
  const mobileMenu = document.getElementById('mobile-menu-items')
  const mobileMenuBtn = document.getElementById('mobile-menu-button')
  const mobileCloseBtn = document.getElementById('close-button')

  mobileCloseBtn.addEventListener('click', function () {
    mobileMenu.style.display = 'none'
  })

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex'
    if (tarjeta.style.display !== 'block') {
      tarjeta.style.display = 'block'
    } else {
      tarjeta.style.display = 'none'
    }
  })

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.style.display = 'none'
      console.log('Funciona')
    })
  })

  /* ========================================
  ========================================
              Mis trabajos
  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */

  /* ==================== Tarjeta ==================== */
  const tarjeta = document.getElementById('tarjeta')
  const tarjetaCloseBtn = document.getElementById('tarjeta-close-btn')

  tarjetaCloseBtn.addEventListener('click', () => {
    tarjeta.style.display = 'none'
  })

  const tarjetaAssets = {
    'Random X': {
      title: 'Random X',
      text: 'Random X es tu ayudante a la hora de jugar y/o divertirte con amigos, sus generadores aleatorios te brindan opciones para elegir de forma aleatoria quien paga la cena, hacer el amigo invisible con amigos o familiares, hacer un bingo, jugar a tu propio Scattergories o lo que se te ocurra. Sin duda el compañero perfecto en estos casos, no esperes más y que empiece la diversión.',
      img: '../assets/img/trabajos/random_x/randomx_presentation.png'
    },
    Operit: {
      title: 'Operit',
      text: 'Calculadora con diseño simple pero muy completa en sus funciones.Si buscas hacer operaciones rápidas tienes su parte básica, si por el contrario eres un usuario más avanzado puedes usar la calculadora científica.También hay varios ajustes para personalizar la app a tu gusto y una página de ayuda por si no comprendes alguna de las funciones.¡Sin duda una calculadora que será fácil y divertida de usar, disfrútala!',
      img: '../assets/img/trabajos/random_x/randomx_presentation.png'
    },
    'Game Zone': {
      title: 'Game Zone',
      text: 'Continuando con los diseños aqui dejo uno nuevo, en este caso de una aplicacion de movil sobre una tienda de videojuegos, que tambien podria servir como base para una tienda en general. Espero que os guste.',
      img: '../assets/img/trabajos/random_x/randomx_presentation.png'
    },
    'El Chingón': {
      title: 'El Chingón',
      text: 'Continuando con los diseños aqui dejo uno nuevo, en este caso de una aplicacion de movil sobre una tienda de videojuegos, que tambien podria servir como base para una tienda en general. Espero que os guste.',
      img: '../assets/img/trabajos/random_x/randomx_presentation.png'
    },
    "L'evasion": {
      title: "L'evasion",
      text: 'Continuando con los diseños aqui dejo uno nuevo, en este caso de una aplicacion de movil sobre una tienda de videojuegos, que tambien podria servir como base para una tienda en general. Espero que os guste.',
      img: '../assets/img/trabajos/random_x/randomx_presentation.png'
    },
    Trabajo: {
      title: 'Trabajo',
      text: 'Esta es una tarjeta por defecto.',
      img: '../assets/img/trabajos/trabajo.png'
    }
  }

  function getTarjetaInfo (item) {
    tarjeta.querySelector('#titulo-tarjeta').innerHTML =
        tarjetaAssets[item.querySelector('p').innerText].title
    tarjeta.querySelector('#texto-tarjeta').innerHTML =
        tarjetaAssets[item.querySelector('p').innerText].text
    tarjeta.querySelector('.fotos-tarjeta img').src =
        tarjetaAssets[item.querySelector('p').innerText].img
  }

  /* ==================== Trabajos ==================== */

  /* Programacion */
  const trabajosProgramacion = document.querySelectorAll(
    '.trabajos-programacion-row .trabajo'
  )

  trabajosProgramacion.forEach(item => {
    item.addEventListener('click', () => {
      if (tarjeta.style.display !== 'block') {
        tarjeta.style.display = 'block'
      } else {
        tarjeta.style.display = 'none'
      }
      getTarjetaInfo(item)
    })
  })
  /* Diseno */
  const trabajosDiseno = document.querySelectorAll(
    '.trabajos-diseno-row .trabajo'
  )

  trabajosDiseno.forEach(item => {
    item.addEventListener('click', () => {
      if (tarjeta.style.display !== 'block') {
        tarjeta.style.display = 'block'
      } else {
        tarjeta.style.display = 'none'
      }
      getTarjetaInfo(item)
    })
  })

  // #endregion
})()
