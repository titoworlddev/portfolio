export const generatePopup = ({ isError = true, text, time }) => {
  const contactContainer = document.querySelector('.contact-popup-container');
  const contactForm = document.querySelector('#contact-form');
  const popup = document.querySelector('.contact-popup');

  if (isError) {
    popup.classList.add('contact-popup-error');
  }

  const icon = isError ? 'fa-xmark' : 'fa-check';
  popup.innerHTML = `<p>${text}</p><i class="fa-solid ${icon}"></i>`;

  contactContainer.style.display = 'flex';

  if (isError === false) contactForm.submit();
  setTimeout(function () {
    contactContainer.style.display = 'none';
    popup.classList.remove('contact-popup-error');
  }, time);
};
