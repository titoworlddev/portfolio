import { tarjetasAssets } from './tarjetasAssets.js';

export const getTarjetaInfo = item => {
  const tarjeta = document.querySelector('#tarjeta');

  const info = key => {
    tarjeta.querySelector('.titulo-tarjeta').innerHTML =
      tarjetasAssets[`${key}`].title;
    tarjeta.querySelector('.texto-tarjeta').innerHTML =
      tarjetasAssets[`${key}`].text;
    tarjeta.querySelector('.fotos-tarjeta img').src =
      tarjetasAssets[`${key}`].img;
    tarjeta.querySelector('.logos-tiendas img').src =
      tarjetasAssets[`${key}`].linkImg;
    tarjeta
      .querySelector('.logos-tiendas a')
      .setAttribute('href', tarjetasAssets[`${key}`].url);
  };

  if (Object.keys(tarjetasAssets).includes(item.querySelector('p').innerText)) {
    info(item.querySelector('p').innerText);
  }
};
