import { tarjetasAssets } from '/js/terjetaAssets.js';
import { getTarjetaInfo } from '/js/projects/getTarjetaInfo.js';

export function projects() {
  /* ==================== Tarjeta ==================== */
  const tarjetaContainer = document.querySelector('.tarjeta-container');
  const tarjetaCloseBtn = document.querySelector('#tarjeta-close-btn');

  tarjetaCloseBtn.addEventListener('click', () => {
    tarjetaContainer.style.display = 'none';
  });

  /* ==================== Trabajos ==================== */

  /* Programacion */
  Object.keys(tarjetasAssets.Programacion).forEach(title => {
    const programacionRow = document.querySelector(
      '.trabajos-programacion-row'
    );
    const trabajo = `
      <div class="trabajo">
        <img src="${tarjetasAssets.Programacion[title].coverImg}" alt="${title} Image">
        <p>${title}</p>
      </div>
      `;
    programacionRow.innerHTML += trabajo;
  });

  /* Diseno */
  Object.keys(tarjetasAssets.Diseno).forEach(title => {
    const disenoRow = document.querySelector('.trabajos-diseno-row');
    const trabajo = `
      <div class="trabajo">
        <img src="${tarjetasAssets.Diseno[title].coverImg}" alt="${title} Image">
        <p>${title}</p>
      </div>
      `;
    disenoRow.innerHTML += trabajo;
  });

  document.querySelectorAll('.trabajo').forEach(item => {
    item.addEventListener('click', () => {
      if (tarjetaContainer.style.display !== 'flex')
        tarjetaContainer.style.display = 'flex';
      getTarjetaInfo(item);
    });
  });
}

export function precacheImgs() {
  const images = [
    '/assets/img/trabajos/random_x/randomx-presentation.webp',
    '/assets/img/trabajos/random-x.webp',
    '/assets/img/trabajos/store-badges/google-play-badge.svg',
    '/assets/img/trabajos/operit/operit-presentation.webp',
    '/assets/img/trabajos/operit.webp',
    '/assets/img/trabajos/game_zone/game-zone-presentation.webp',
    '/assets/img/trabajos/game-zone-store.webp',
    '/assets/img/trabajos/el_chingon/el-chingon-presentation.webp',
    '/assets/img/trabajos/el-chingon.webp',
    '/assets/img/trabajos/store-badges/instagram-logo.svg',
    '/assets/img/trabajos/levasion/levasion-presentation.webp',
    '/assets/img/trabajos/levasion.webp'
  ];
  const cachedImages = [];
  images.forEach(elem => {
    cachedImages.push(document.createElement('img'));
    cachedImages.at(-1).src = elem;
  });
}
