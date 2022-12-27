import { $ } from '/js/general.js';

export const projects = () => {
  (function () {
    /* ==================== Tarjeta ==================== */
    const tarjeta = $('#tarjeta');
    const tarjetaCloseBtn = $('#tarjeta-close-btn');

    tarjetaCloseBtn.addEventListener('click', () => {
      tarjeta.style.display = 'none';
    });

    const tarjetaAssets = {
      Programacion: {
        'Random X': {
          title: 'Random X App',
          text: 'Random X es tu asistente a la hora de jugar y/o divertirte con amigos, sus generadores aleatorios te dan opciones para elegir aleatoriamente quién paga la cena, hacer el amigo invisible con amigos o familiares, hacer un bingo, jugar a tu propio Scattergories o lo que se te ocurra. Sin duda el compañero perfecto en estos casos, no esperes más y que empiece la diversión.',
          img: '/assets/img/trabajos/random_x/randomx-presentation.png',
          coverImg: '/assets/img/trabajos/random-x.png',
          linkImg: '/assets/img/trabajos/store-badges/google-play-badge.svg',
          url: 'https://play.google.com/store/apps/details?id=com.hayaxelectronics.random_x_app&hl=es'
        },
        Operit: {
          title: 'Operit App',
          text: 'Calculadora con un diseño sencillo pero muy completa en sus funciones. Si buscas hacer operaciones rápidas tienes su parte básica, si por el contrario eres un usuario más avanzado puedes utilizar la calculadora científica. También hay varias configuraciones para personalizar la aplicación a tu gusto y una página de ayuda si no entiendes alguna de las funciones. Definitivamente una calculadora que será fácil y divertida de usar, ¡disfrútala!',
          img: '/assets/img/trabajos/operit/operit-presentation.png',
          coverImg: '/assets/img/trabajos/operit.png',
          linkImg: '/assets/img/trabajos/store-badges/google-play-badge.svg',
          url: 'https://play.google.com/store/apps/details?id=com.hayaxelectronics.operit&gl=ES'
        }
      },

      Diseno: {
        'Game Zone': {
          title: 'Tienda Electrónica - Game Zone',
          text: 'Continuando con los diseños aquí les dejo uno nuevo, en este caso de una aplicación móvil sobre una tienda de videojuegos, que también podría servir como base para una tienda en general. Espero que te guste. <br/><br/>Disfruta de todos mis diseños en mi instagram.',
          img: '/assets/img/trabajos/game_zone/game-zone-presentation.png',
          coverImg: '/assets/img/trabajos/game-zone-store.png',
          linkImg: '/assets/img/trabajos/store-badges/instagram-logo.svg',
          url: 'https://www.instagram.com/cristian_am91/'
        },
        'El Chingón': {
          title: 'Restaurante - El Chingón',
          text: 'Diseño sobre un restaurante de comida mexicana, que se puede tomar como ejemplo de diseños para restaurantes. Es un diseño muy simple, pero a la vez muy atractivo. Espero que te guste. <br/><br/>Disfruta de todos mis diseños en mi instagram.',
          img: '/assets/img/trabajos/el_chingon/el-chingon-presentation.png',
          coverImg: '/assets/img/trabajos/el-chingon.png',
          linkImg: '/assets/img/trabajos/store-badges/instagram-logo.svg',
          url: 'https://www.instagram.com/cristian_am91/'
        },
        "L'evasion": {
          title: "Hotel - L'evasion",
          text: 'Diseño en la página web de un hotel o apartamentos. Un diseño suave y relajado, que permite encontrar una experiencia de hospedaje muy placentera. Espero que te guste. <br/><br/>Disfruta de todos mis diseños en mi instagram.',
          img: '/assets/img/trabajos/levasion/levasion-presentation.png',
          coverImg: '/assets/img/trabajos/levasion.png',
          linkImg: '/assets/img/trabajos/store-badges/instagram-logo.svg',
          url: 'https://www.instagram.com/cristian_am91/'
        }
      }
    };

    function getTarjetaInfo(item) {
      function info(key) {
        tarjeta.querySelector('#titulo-tarjeta').innerHTML =
          tarjetaAssets[`${key}`][item.querySelector('p').innerText].title;
        tarjeta.querySelector('#texto-tarjeta').innerHTML =
          tarjetaAssets[`${key}`][item.querySelector('p').innerText].text;
        tarjeta.querySelector('.fotos-tarjeta img').src =
          tarjetaAssets[`${key}`][item.querySelector('p').innerText].img;
        tarjeta.querySelector('.logos-tiendas img').src =
          tarjetaAssets[`${key}`][item.querySelector('p').innerText].linkImg;
        tarjeta
          .querySelector('.logos-tiendas a')
          .setAttribute(
            'href',
            tarjetaAssets[`${key}`][item.querySelector('p').innerText].url
          );
      }
      if (
        Object.keys(tarjetaAssets.Programacion).includes(
          item.querySelector('p').innerText
        )
      ) {
        info('Programacion');
      } else {
        info('Diseno');
      }
    }

    /* ==================== Trabajos ==================== */

    /* Programacion */
    Object.keys(tarjetaAssets.Programacion).forEach((title) => {
      const programacionRow = document.querySelector(
        '.trabajos-programacion-row'
      );
      const trabajo = `
      <div class="trabajo">
        <img src="${tarjetaAssets.Programacion[title].coverImg}" alt="${title} Image">
        <p>${title}</p>
      </div>
      `;
      programacionRow.innerHTML += trabajo;
    });

    /* Diseno */
    Object.keys(tarjetaAssets.Diseno).forEach((title) => {
      const disenoRow = document.querySelector('.trabajos-diseno-row');
      const trabajo = `
      <div class="trabajo">
        <img src="${tarjetaAssets.Diseno[title].coverImg}" alt="${title} Image">
        <p>${title}</p>
      </div>
      `;
      disenoRow.innerHTML += trabajo;
    });

    document.querySelectorAll('.trabajo').forEach((item) => {
      item.addEventListener('click', () => {
        if (tarjeta.style.display !== 'block') tarjeta.style.display = 'block';
        getTarjetaInfo(item);
      });
    });
  })();
};

export const precacheImgs = () => {
  const images = [
    '/assets/img/trabajos/random_x/randomx-presentation.png',
    '/assets/img/trabajos/random-x.png',
    '/assets/img/trabajos/store-badges/google-play-badge.svg',
    '/assets/img/trabajos/operit/operit-presentation.png',
    '/assets/img/trabajos/operit.png',
    '/assets/img/trabajos/game_zone/game-zone-presentation.png',
    '/assets/img/trabajos/game-zone-store.png',
    '/assets/img/trabajos/el_chingon/el-chingon-presentation.png',
    '/assets/img/trabajos/el-chingon.png',
    '/assets/img/trabajos/store-badges/instagram-logo.svg',
    '/assets/img/trabajos/levasion/levasion-presentation.png',
    '/assets/img/trabajos/levasion.png'
  ];
  const cachedImages = [];
  images.forEach((elem) => {
    cachedImages.push(document.createElement('img'));
    cachedImages.at(-1).src = elem;
  });
};
