export function precacheImgs() {
  const images = [
    '/assets/img/trabajos/random_x/randomx-presentation.webp',
    '/assets/img/trabajos/random-x.webp',
    '/assets/img/trabajos/store-badges/google-play-badge.svg',
    '/assets/img/trabajos/operit/operit-presentation.webp',
    '/assets/img/trabajos/operit.webp',
    '/assets/img/trabajos/game_zone/game-zone-presentation.webp',
    '/assets/img/trabajos/game-zone-store.webp',
    '/assets/img/trabajos/el_chingon/el-chingon-presentation.webp',
    '/assets/img/trabajos/el-chingon.webp',
    '/assets/img/trabajos/store-badges/instagram-logo.svg',
    '/assets/img/trabajos/levasion/levasion-presentation.webp',
    '/assets/img/trabajos/levasion.webp'
  ];
  const cachedImages = [];
  images.forEach(elem => {
    cachedImages.push(document.createElement('img'));
    cachedImages.at(-1).src = elem;
  });
}
