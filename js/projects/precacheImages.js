import { tarjetasAssets } from './tarjetaAssets.js';

export function precacheImgs() {
  let imgs = [];
  Object.entries(tarjetasAssets.Programacion).forEach(entrie => {
    imgs.push(entrie[1].img);
    imgs.push(entrie[1].coverImg);
    imgs.push(entrie[1].linkImg);
  });
  Object.entries(tarjetasAssets.Diseno).forEach(entrie => {
    imgs.push(entrie[1].img);
    imgs.push(entrie[1].coverImg);
    imgs.push(entrie[1].linkImg);
  });

  const cachedImages = [];
  imgs.forEach(elem => {
    cachedImages.push(document.createElement('img'));
    cachedImages.at(-1).src = elem;
  });
}
