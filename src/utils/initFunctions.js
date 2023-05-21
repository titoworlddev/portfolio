import { handleMenu } from '/src/utils/menu';
import { closeMenuCard, btnUpPage } from '/src/utils/generalFunctions';
import { setPathName } from '/src/utils/setPathName';
import { scrollToSection } from '/src/utils/scrollToSection';

export function initFunctions() {
  scrollToSection();
  handleMenu();
  closeMenuCard();
  btnUpPage();
  setPathName();
}
