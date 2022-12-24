import { closeMenuCard, btnUpPage } from '/js/general.js';
import { menuControl } from '/js/menu.js';
import { projects } from '/js/projects.js';
import { contact } from '/js/contact.js';
import { aboutMe } from '/js/about.js';

(function () {
  /* General/Menu */
  closeMenuCard();
  menuControl();
  btnUpPage();
  /* Projects */
  projects();
  /* About Me */
  aboutMe();
  /* Contact */
  contact();
})();
