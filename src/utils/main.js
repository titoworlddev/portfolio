import { closeMenuCard, btnUpPage } from '/js/generalFunctions.js';
import { handleMenu } from '/js/menu.js';
import { projects } from '/js/projects/projects.js';
import { contact } from '/js/contact/contact.js';
import { aboutMe } from '/js/about.js';
import { setPathName } from '/js/setPathName.js';

(function () {
  /* General / Menu */
  setPathName();
  closeMenuCard();
  handleMenu();
  btnUpPage();
  /* Projects */
  projects();
  /* About Me */
  aboutMe();
  /* Contact */
  contact();
})();
