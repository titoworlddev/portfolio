import { closeMenuCard } from '/src/utils/closeMenuCard';
import { scrollToSectionOnAppStart } from '/src/utils/scrollToSectionOnAppStart';

export function initFunctions() {
  scrollToSectionOnAppStart();
  closeMenuCard();
}
