import { getJSONData } from './getJSONData.js';

export function precacheImgs() {
  let imgs = [];

  getJSONData('/assets/json/tarjetaAssets.json').then(data => {
    Object.entries(data.Programacion)
      .concat(Object.entries(data.Diseno))
      .forEach(entrie => {
        !imgs.includes(entrie[1].img) && imgs.push(entrie[1].img);
        !imgs.includes(entrie[1].coverImg) && imgs.push(entrie[1].coverImg);
        !imgs.includes(entrie[1].linkImg) && imgs.push(entrie[1].linkImg);
      });
  });

  const cachedImages = [];
  imgs.forEach(elem => {
    cachedImages.push(document.createElement('img'));
    cachedImages.at(-1).src = elem;
  });
}
