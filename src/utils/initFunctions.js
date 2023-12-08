import { closeMenuCard } from './closeMenuCard';
import { scrollToSectionOnAppStart } from './scrollToSectionOnAppStart';

export function initFunctions() {
  scrollToSectionOnAppStart();
  closeMenuCard();
}
