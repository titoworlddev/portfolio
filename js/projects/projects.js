import { tarjetasAssets } from './tarjetasAssets.js';
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

  let category = 'web';

  // Renderiza los trabajos segun la categoria elegida
  const trabajosContainers = document.querySelectorAll('.trabajos-container');
  trabajosContainers.forEach(container => {
    const containerCategory = container.id.split('-')[1];
    // Para que no se muestren todos a la vez
    if (containerCategory === category) {
      container.style.display = 'grid';
    } else {
      container.style.display = 'none';
    }

    // Renderizamos los trabajos de la categoria
    Object.entries(tarjetasAssets)
      .filter(([_, v]) => v.category === containerCategory)
      .forEach(([key, value]) => {
        const trabajo = `
        <div class="trabajo">
          <img style="aspect-ratio: 16/9" src="${value.coverImg}" alt="${key} Image">
          <p>${key}</p>
        </div>
        `;
        container.innerHTML += trabajo;
      });
  });

  // Mostramos la categoria seleccionada, segun el boton pulsado
  const categoryBtns = document.querySelectorAll('.btn-category');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      category = btn.id;

      // Coloreamos el boton de categoria seleccionado
      categoryBtns.forEach(btn => {
        if (btn.id === category) {
          btn.classList.add('btn-category-active');
        } else {
          btn.classList.remove('btn-category-active');
        }
      });

      // Mostramos solo los trabajos de la categoria seleccionada
      trabajosContainers.forEach(container => {
        const containerCategory = container.id.split('-')[1];
        if (containerCategory === category) {
          container.style.display = 'grid';
        } else {
          container.style.display = 'none';
        }
      });
    });
  });

  // Cuando se pulsa un trabajo, se muestra la tarjeta con la informacion del trabajo
  document.querySelectorAll('.trabajo').forEach(item => {
    item.addEventListener('click', () => {
      getTarjetaInfo(item);
      setTimeout(() => {
        if (tarjetaContainer.style.display !== 'flex')
          tarjetaContainer.style.display = 'flex';
      }, 200);
    });
  });
}
