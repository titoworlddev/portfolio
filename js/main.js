import { closeMenuCard, aboutMe } from '/js/general.js';
import { menuFn } from '/js/menu.js';
import { precacheImgs, projects } from '/js/projects.js';
import { contact } from '/js/contact.js';

(function () {
  /* General/Menu */
  closeMenuCard();
  menuFn();
  precacheImgs();
  /* Projects */
  projects();
  /* About Me */
  aboutMe();
  /* Contact */
  contact();
})();
