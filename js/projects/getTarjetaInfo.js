import { tarjetasAssets } from '/js/terjetaAssets.js';

export const getTarjetaInfo = item => {
  const tarjeta = document.querySelector('#tarjeta');

  const info = key => {
    tarjeta.querySelector('.titulo-tarjeta').innerHTML =
      tarjetasAssets[`${key}`][item.querySelector('p').innerText].title;
    tarjeta.querySelector('.texto-tarjeta').innerHTML =
      tarjetasAssets[`${key}`][item.querySelector('p').innerText].text;
    tarjeta.querySelector('.fotos-tarjeta img').src =
      tarjetasAssets[`${key}`][item.querySelector('p').innerText].img;
    tarjeta.querySelector('.logos-tiendas img').src =
      tarjetasAssets[`${key}`][item.querySelector('p').innerText].linkImg;
    tarjeta
      .querySelector('.logos-tiendas a')
      .setAttribute(
        'href',
        tarjetasAssets[`${key}`][item.querySelector('p').innerText].url
      );
  };

  if (
    Object.keys(tarjetasAssets.Programacion).includes(
      item.querySelector('p').innerText
    )
  ) {
    info('Programacion');
  } else {
    info('Diseno');
  }
};
