import { closeMenuCard } from '/src/utils/generalFunctions';
import { scrollToSectionOnAppStart } from '/src/utils/scrollToSectionOnAppStart';

export function initFunctions() {
  scrollToSectionOnAppStart();
  closeMenuCard();
}
