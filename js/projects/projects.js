import { tarjetasAssets } from '/js/terjetaAssets.js';
import { getTarjetaInfo } from '/js/projects/getTarjetaInfo.js';
import { precacheImgs } from './precacheImages.js';

export function projects() {
  /* ==================== Tarjeta ==================== */
  const tarjetaContainer = document.querySelector('.tarjeta-container');
  const tarjetaCloseBtn = document.querySelector('#tarjeta-close-btn');

  tarjetaCloseBtn.addEventListener('click', () => {
    tarjetaContainer.style.display = 'none';
  });

  /* ==================== Trabajos ==================== */
  precacheImgs();

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
