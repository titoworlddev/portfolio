import { closeMenuCard, btnUpPage } from '/src/utils/generalFunctions';
import { setPathName } from '/src/utils/setPathName';
import { scrollToSection } from '/src/utils/scrollToSection';

export function initFunctions(ref) {
  scrollToSection(ref);
  closeMenuCard();
  btnUpPage(ref);
  setPathName(ref);
}
