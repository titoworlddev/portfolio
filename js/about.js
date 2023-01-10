import { $ } from '/js/general.js';

export function aboutMe() {
  let currentDate = new Date();
  let myBirthdate = new Date('10/20/1991');
  let ageDate = new Date(currentDate - myBirthdate);
  let myCurrentAge = $('#my-current-age');
  myCurrentAge.innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970);
}
