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
      tarjeta.style.display = 'none'
    } else {
      tarjeta.style.display = 'block'
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
    Programacion: {
      'Random X': {
        title: 'Random X App',
        text: 'Random X es tu ayudante a la hora de jugar y/o divertirte con amigos, sus generadores aleatorios te brindan opciones para elegir de forma aleatoria quien paga la cena, hacer el amigo invisible con amigos o familiares, hacer un bingo, jugar a tu propio Scattergories o lo que se te ocurra. Sin duda el compañero perfecto en estos casos, no esperes más y que empiece la diversión. ',
        img: '../assets/img/trabajos/random_x/randomx-presentation.png',
        coverImg: '../assets/img/trabajos/random-x.png',
        linkImg: '../assets/img/trabajos/store-badges/google-play-badge.svg',
        url: 'https://play.google.com/store/apps/details?id=com.hayaxelectronics.random_x_app&hl=es'
      },
      Operit: {
        title: 'Operit App',
        text: 'Calculadora con diseño simple pero muy completa en sus funciones.Si buscas hacer operaciones rápidas tienes su parte básica, si por el contrario eres un usuario más avanzado puedes usar la calculadora científica.También hay varios ajustes para personalizar la app a tu gusto y una página de ayuda por si no comprendes alguna de las funciones.¡Sin duda una calculadora que será fácil y divertida de usar, disfrútala!',
        img: '../assets/img/trabajos/operit/operit-presentation.png',
        coverImg: '../assets/img/trabajos/operit.png',
        linkImg: '../assets/img/trabajos/store-badges/google-play-badge.svg',
        url: 'https://play.google.com/store/apps/details?id=com.hayaxelectronics.operit&gl=ES'
      }
    },
    Diseno: {
      'Game Zone': {
        title: 'Game Zone Store - Design',
        text: 'Continuando con los diseños aqui dejo uno nuevo, en este caso de una aplicacion de movil sobre una tienda de videojuegos, que tambien podria servir como base para una tienda en general. Espero que os guste. <br/><br/>Disfruta de todos mis diseños en mi instagram.',
        img: '../assets/img/trabajos/game_zone/game-zone-presentation.png',
        coverImg: '../assets/img/trabajos/game-zone-store.png',
        linkImg: '../assets/img/trabajos/store-badges/instagram-logo.svg',
        url: 'https://www.instagram.com/cristian_am91/'
      },
      'El Chingón': {
        title: 'El Chingón Restaurant - Design',
        text: 'Diseño sobre un restaurante de comida mexicana, que se puede tomar como ejemplo de diseños para restaruantes. Un diseño es muy simple, pero muy atractivo. Espero que os guste. <br/><br/>Disfruta de todos mis diseños en mi instagram.',
        img: '../assets/img/trabajos/el_chingon/el-chingon-presentation.png',
        coverImg: '../assets/img/trabajos/el-chingon.png',
        linkImg: '../assets/img/trabajos/store-badges/instagram-logo.svg',
        url: 'https://www.instagram.com/cristian_am91/'
      },
      "L'evasion": {
        title: "L'evasion Hotel - Design",
        text: 'Diseño sobre una página web de hostelería. Un diseño suave y relajado, que te permita encontrar una experiencia de alojamiento muy agradable. Espero que os guste. <br/><br/>Disfruta de todos mis diseños en mi instagram.',
        img: '../assets/img/trabajos/levasion/levasion-presentation.png',
        coverImg: '../assets/img/trabajos/levasion.png',
        linkImg: '../assets/img/trabajos/store-badges/instagram-logo.svg',
        url: 'https://www.instagram.com/cristian_am91/'
      }
    }
  }

  function getTarjetaInfo (item) {
    if (Object.keys(tarjetaAssets.Programacion).includes(item.querySelector('p').innerText)) {
      tarjeta.querySelector('#titulo-tarjeta').innerHTML =
      tarjetaAssets.Programacion[item.querySelector('p').innerText].title
      tarjeta.querySelector('#texto-tarjeta').innerHTML =
      tarjetaAssets.Programacion[item.querySelector('p').innerText].text
      tarjeta.querySelector('.fotos-tarjeta img').src =
      tarjetaAssets.Programacion[item.querySelector('p').innerText].img
      tarjeta.querySelector('.logos-tiendas img').src =
      tarjetaAssets.Programacion[item.querySelector('p').innerText].linkImg
      tarjeta.querySelector('.logos-tiendas a').setAttribute('href', tarjetaAssets.Programacion[item.querySelector('p').innerText].url)
    } else {
      tarjeta.querySelector('#titulo-tarjeta').innerHTML =
      tarjetaAssets.Diseno[item.querySelector('p').innerText].title
      tarjeta.querySelector('#texto-tarjeta').innerHTML =
      tarjetaAssets.Diseno[item.querySelector('p').innerText].text
      tarjeta.querySelector('.fotos-tarjeta img').src =
      tarjetaAssets.Diseno[item.querySelector('p').innerText].img
      tarjeta.querySelector('.logos-tiendas img').src =
      tarjetaAssets.Diseno[item.querySelector('p').innerText].linkImg
      tarjeta.querySelector('.logos-tiendas a').setAttribute('href', tarjetaAssets.Diseno[item.querySelector('p').innerText].url)
    }
  }

  /* ==================== Trabajos ==================== */

  /* Programacion */
  Object.keys(tarjetaAssets.Programacion).forEach(title => {
    const programacionRow = document.querySelector('.trabajos-programacion-row')
    const trabajo = document.createElement('div')
    trabajo.classList.add('trabajo')
    const blurMask = document.createElement('div')
    blurMask.classList.add('blur-mask')
    const img = document.createElement('img')
    img.src = tarjetaAssets.Programacion[title].coverImg
    img.alt = title + ' Image'
    const p = document.createElement('p')
    p.innerHTML = title
    trabajo.appendChild(blurMask)
    trabajo.appendChild(img)
    trabajo.appendChild(p)
    programacionRow.appendChild(trabajo)
  })

  const trabajosProgramacion = document.querySelectorAll(
    '.trabajos-programacion-row .trabajo'
  )

  function displayMenuOrTarjet () {
    if (tarjeta.style.display !== 'block') {
      tarjeta.style.display = 'block'
    } else {
      tarjeta.style.display = 'none'
    }
    if (mobileMenu.style.display !== 'block') {
      mobileMenu.style.display = 'none'
    } else {
      mobileMenu.style.display = 'block'
    }
  }

  trabajosProgramacion.forEach(item => {
    item.addEventListener('click', () => {
      displayMenuOrTarjet()
      getTarjetaInfo(item)
    })
  })

  /* Diseno */
  Object.keys(tarjetaAssets.Diseno).forEach(title => {
    const programacionRow = document.querySelector('.trabajos-diseno-row')
    const trabajo = document.createElement('div')
    trabajo.classList.add('trabajo')
    const blurMask = document.createElement('div')
    blurMask.classList.add('blur-mask')
    const img = document.createElement('img')
    img.src = tarjetaAssets.Diseno[title].coverImg
    img.alt = title + ' Image'
    const p = document.createElement('p')
    p.innerHTML = title
    trabajo.appendChild(blurMask)
    trabajo.appendChild(img)
    trabajo.appendChild(p)
    programacionRow.appendChild(trabajo)
  })

  const trabajosDiseno = document.querySelectorAll(
    '.trabajos-diseno-row .trabajo'
  )

  trabajosDiseno.forEach(item => {
    item.addEventListener('click', () => {
      displayMenuOrTarjet()
      getTarjetaInfo(item)
    })
  })

  // #endregion
})()
