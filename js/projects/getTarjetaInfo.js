import { getJSONData } from './getJSONData.js';

export const getTarjetaInfo = item => {
  const tarjeta = document.querySelector('#tarjeta');

  getJSONData('/assets/json/tarjetaAssets.json').then(data => {
    const info = key => {
      tarjeta.querySelector('.titulo-tarjeta').innerHTML =
        data[`${key}`][item.querySelector('p').innerText].title;
      tarjeta.querySelector('.texto-tarjeta').innerHTML =
        data[`${key}`][item.querySelector('p').innerText].text;
      tarjeta.querySelector('.fotos-tarjeta img').src =
        data[`${key}`][item.querySelector('p').innerText].img;
      tarjeta.querySelector('.logos-tiendas img').src =
        data[`${key}`][item.querySelector('p').innerText].linkImg;
      tarjeta
        .querySelector('.logos-tiendas a')
        .setAttribute(
          'href',
          data[`${key}`][item.querySelector('p').innerText].url
        );
    };

    if (
      Object.keys(data.Programacion).includes(item.querySelector('p').innerText)
    ) {
      info('Programacion');
    } else {
      info('Diseno');
    }
  });
};
