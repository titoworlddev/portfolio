import { getJSONData } from './getJSONData.js';
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

  getJSONData('/assets/json/tarjetaAssets.json').then(data => {
    /* Programacion */
    Object.keys(data.Programacion).forEach(title => {
      const programacionRow = document.querySelector(
        '.trabajos-programacion-row'
      );
      const trabajo = `
        <div class="trabajo">
        <img style="aspect-ratio: 16/9" src="${data.Programacion[title].coverImg}" alt="${title} Image">
        <p>${title}</p>
      </div>
      `;
      programacionRow.innerHTML += trabajo;
    });

    /* Diseno */
    Object.keys(data.Diseno).forEach(title => {
      const disenoRow = document.querySelector('.trabajos-diseno-row');
      const trabajo = `
      <div class="trabajo">
      <img src="${data.Diseno[title].coverImg}" alt="${title} Image">
      <p>${title}</p>
      </div>
      `;
      disenoRow.innerHTML += trabajo;
    });

    document.querySelectorAll('.trabajo').forEach(item => {
      item.addEventListener('click', () => {
        getTarjetaInfo(item);
        if (tarjetaContainer.style.display !== 'flex')
          tarjetaContainer.style.display = 'flex';
      });
    });
  });
}
