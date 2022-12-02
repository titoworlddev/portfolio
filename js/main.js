import { closeMenuCard, aboutMe } from '/js/general.js';
import { menuFn } from '/js/menu.js';
import { precacheImgs, projects } from '/js/projects.js';
import { contact } from '/js/contact.js';

(function () {
  /* General/Menu */
  closeMenuCard();
  menuFn();
  /* Projects */
  precacheImgs();
  projects();
  /* About Me */
  aboutMe();
  /* Contact */
  contact();
})();
