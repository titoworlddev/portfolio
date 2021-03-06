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
      text: 'Random X is your assistant when it comes to playing and/or having fun with friends, its random generators give you options to randomly choose who pays for dinner, make the invisible friend with friends or family, make a bingo, play on your own Scattergories or whatever comes to mind. Undoubtedly the perfect companion in these cases, do not wait any longer and let the fun begin.',
      img: '../assets/img/trabajos/random_x/randomx-presentation.png',
      coverImg: '../assets/img/trabajos/random-x.png',
      linkImg: '../assets/img/trabajos/store-badges/google-play-badge.svg',
      url: 'https://play.google.com/store/apps/details?id=com.hayaxelectronics.random_x_app&hl=es'
    },
    Operit: {
      title: 'Operit App',
      text: 'Calculator with a simple design but very complete in its functions. If you are looking to do quick operations you have its basic part, if on the contrary you are a more advanced user you can use the scientific calculator. There are also several settings to customize the app to your liking and a page help if you don\'t understand any of the functions. Definitely a calculator that will be easy and fun to use, enjoy!',
      img: '../assets/img/trabajos/operit/operit-presentation.png',
      coverImg: '../assets/img/trabajos/operit.png',
      linkImg: '../assets/img/trabajos/store-badges/google-play-badge.svg',
      url: 'https://play.google.com/store/apps/details?id=com.hayaxelectronics.operit&gl=ES'
    }
  },
  Diseno: {
    'Game Zone': {
      title: 'Game Zone Store - Design',
      text: 'Continuing with the designs here I leave a new one, in this case of a mobile application on a video game store, which could also serve as the basis for a store in general. I hope you like it. <br/><br/>Enjoy all my designs on my instagram.',
      img: '../assets/img/trabajos/game_zone/game-zone-presentation.png',
      coverImg: '../assets/img/trabajos/game-zone-store.png',
      linkImg: '../assets/img/trabajos/store-badges/instagram-logo.svg',
      url: 'https://www.instagram.com/cristian_am91/'
    },
    'El Ching??n': {
      title: 'El Ching??n Restaurant - Design',
      text: 'Design about a Mexican food restaurant, which can be taken as an example of designs for restaurants. A design is very simple, but very attractive. I hope you like it. <br/><br/>Enjoy all my designs on my instagram.',
      img: '../assets/img/trabajos/el_chingon/el-chingon-presentation.png',
      coverImg: '../assets/img/trabajos/el-chingon.png',
      linkImg: '../assets/img/trabajos/store-badges/instagram-logo.svg',
      url: 'https://www.instagram.com/cristian_am91/'
    },
    "L'evasion": {
      title: "L'evasion Hotel - Design",
      text: 'Design on a hotel web page. A soft and relaxed design, which allows you to find a very pleasant hosting experience. I hope you like it. <br/><br/>Enjoy all my designs on my instagram.',
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
  const mobileMenu = document.getElementById('mobile-menu-items')
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
