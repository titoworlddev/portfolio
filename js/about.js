import { $ } from '/js/general.js';

export const aboutMe = () => {
  let currentDate = new Date();
  let myBirthdate = new Date(1991, 10, 20);
  let myCurrentAge = $('#my-current-age');
  myCurrentAge.innerHTML =
    currentDate.getFullYear() - myBirthdate.getFullYear();
};
