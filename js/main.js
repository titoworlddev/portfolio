import { closeMenuCard, btnUpPage } from '/js/general.js';
import { handleMenu } from '/js/menu.js';
import { projects } from '/js/projects.js';
import { contact } from '/js/contact.js';
import { aboutMe } from '/js/about.js';
import { precacheImgs } from '/js/projects.js';

(function () {
  /* General / Menu */
  closeMenuCard();
  handleMenu();
  btnUpPage();
  precacheImgs();
  /* Projects */
  projects();
  /* About Me */
  aboutMe();
  /* Contact */
  contact();
})();
