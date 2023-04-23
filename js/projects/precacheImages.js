import { tarjetasAssets } from './tarjetasAssets.js';

export function precacheImgs() {
  let imgs = [];
  Object.entries(tarjetasAssets).forEach(entrie => {
    const [_, value] = entrie;
    const { img, coverImg, linkImg } = value;
    !imgs.includes(img) && imgs.push(img);
    !imgs.includes(coverImg) && imgs.push(coverImg);
    !imgs.includes(linkImg) && imgs.push(linkImg);
  });

  const cachedImages = [];
  imgs.forEach(elem => {
    cachedImages.push(document.createElement('img'));
    cachedImages.at(-1).src = elem;
  });
}
