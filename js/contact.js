console.log(process.env.API_KEY);
const $ = (selector) => document.querySelector(selector);

const btnSubmit = $('.btn-submit');
const inputName = $('#name');
const inputEmail = $('#email');
const inputMessage = $('#message');
const errorName = $('.error-name');
const errorEmail = $('.error-email');
const errorMessage = $('.error-message');

const emailExpr = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const inputs = [inputName, inputEmail, inputMessage];
inputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    if (input === inputName && errorName.style.display === 'block') {
      errorName.style.display = 'none';
      inputName.style.border = 'none';
    }
    if (input === inputEmail && errorEmail.style.display === 'block') {
      errorEmail.style.display = 'none';
      inputEmail.style.border = 'none';
    }
    if (input === inputMessage && errorMessage.style.display === 'block') {
      errorMessage.style.display = 'none';
      inputMessage.style.border = 'none';
    }
  });
});

const showEmailError = (text) => {
  errorEmail.innerHTML = text;
  errorEmail.style.display = 'block';
  inputEmail.style.border = '0.6mm solid #e23838';
};
const showNameError = (text) => {
  errorName.innerHTML = text;
  errorName.style.display = 'block';
  inputName.style.border = '0.6mm solid #e23838';
};

btnSubmit.addEventListener('mouseup', () => {
  if (
    inputName.value === '' ||
    inputEmail.value === '' ||
    inputMessage.value === ''
  ) {
    if (inputName.value === '') {
      showNameError(
        'You must put the name so that I can address you in my answer.'
      );
    } else if (inputName.value.length < 3) {
      showNameError(
        'The name is not valid, it must contain a minimum of 3 letters.'
      );
    }
    if (inputEmail.value === '') {
      showEmailError('You must put the email so that I can answer you.');
    } else if (!emailExpr.test(inputEmail.value)) {
      showEmailError(
        'The email is not valid, you must enter a correct email to continue.'
      );
    } else if (inputEmail.value.includes('reply')) {
      showEmailError(
        'Please, do not use the contact form to send advertising, its use is exclusive for hiring.'
      );
    }
    if (inputMessage.value === '') {
      errorMessage.style.display = 'block';
      inputMessage.style.border = '0.6mm solid #e23838';
    }
  } else {
    if (
      !emailExpr.test(inputEmail.value) ||
      inputEmail.value.includes('reply') ||
      inputMessage.value.includes('titoworld.dev') ||
      inputMessage.value.includes('http://') ||
      inputMessage.value.includes('https://') ||
      inputName.value.length < 3
    ) {
      if (!emailExpr.test(inputEmail.value)) {
        showEmailError(
          'The email is not valid, you must enter a correct email to continue.'
        );
      }
      if (inputEmail.value.includes('reply')) {
        showEmailError(
          'Please, do not use the contact form to send advertising, its use is exclusive for hiring.'
        );
      }
      if (
        inputMessage.value.includes('titoworld.dev') ||
        inputMessage.value.includes('http://') ||
        inputMessage.value.includes('https://')
      ) {
        const contactContainer = document.querySelector('.contact-container');
        const popup = document.createElement('div');
        popup.classList.add('contact-popup-error');
        popup.innerHTML =
          '<p>Advertising is not allowed, the form is only for hiring</p><i class="fa-solid fa-xmark"></i>';
        contactContainer.appendChild(popup);

        setTimeout(function () {
          contactContainer.removeChild(popup);
        }, 5000);
      }
      if (inputName.value.length < 3) {
        showNameError(
          'The name is not valid, it must contain a minimum of 3 letters.'
        );
      }
    } else {
      const contactContainer = $('.contact-container');
      const contactForm = $('#contact-form');

      const popup = document.createElement('div');
      popup.classList.add('contact-popup');
      popup.innerHTML =
        '<p>Your message has been sent successfully</p><i class="fa-solid fa-check"></i>';
      contactContainer.appendChild(popup);

      setTimeout(function () {
        contactContainer.removeChild(popup);
        contactForm.submit();
      }, 200);
    }
  }
});
