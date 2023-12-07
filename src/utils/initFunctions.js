import { closeMenuCard, btnUpPage } from '/src/utils/generalFunctions';
import { scrollToSection } from '/src/utils/scrollToSection';

export function initFunctions(ref) {
  scrollToSection();
  closeMenuCard();
  btnUpPage(ref);
}
