import { tarjetasAssets } from './tarjetaAssets.js';

export function precacheImgs() {
  let imgs = [];
  Object.entries(tarjetasAssets.Programacion)
    .concat(Object.entries(tarjetasAssets.Diseno))
    .forEach(entrie => {
      !imgs.includes(entrie[1].img) && imgs.push(entrie[1].img);
      !imgs.includes(entrie[1].coverImg) && imgs.push(entrie[1].coverImg);
      !imgs.includes(entrie[1].linkImg) && imgs.push(entrie[1].linkImg);
    });

  console.log(imgs);

  const cachedImages = [];
  imgs.forEach(elem => {
    cachedImages.push(document.createElement('img'));
    cachedImages.at(-1).src = elem;
  });
}
