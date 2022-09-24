const $ = (selector) => document.querySelector(selector);

const btnSubmit = $('.btn-submit');
const inputName = $('#name');
const inputEmail = $('#email');
const inputMessage = $('#message');
const errorName = $('.error-name');
const errorEmail = $('.error-email');
const errorMessage = $('.error-message');
const API_KEY = process.env.API_KEY;
const API_HOST = process.env.API_HOST;
const API_URL = process.env.API_URL;

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${API_KEY}`,
    'X-RapidAPI-Host': `${API_HOST}`
  }
};

const generatePopup = ({ isError = false, text, time }) => {
  const contactContainer = $('.contact-container');
  const contactForm = $('#contact-form');
  const popup = document.createElement('div');

  if (isError === false) {
    popup.classList.add('contact-popup');
  } else {
    popup.classList.add('contact-popup-error');
  }
  const icon = isError ? 'fa-xmark' : 'fa-check';
  popup.innerHTML = `<p>${text}</p><i class="fa-solid ${icon}"></i>`;
  contactContainer.appendChild(popup);

  setTimeout(function () {
    contactContainer.removeChild(popup);
    if (isError === false) contactForm.submit();
  }, time);
};

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

const validateEmail = async (email) => {
  return await fetch(`${API_URL}${email}`, OPTIONS)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

btnSubmit.addEventListener('mouseup', async () => {
  const emailInfo = await validateEmail(inputEmail.value);

  if (
    inputName.value === '' ||
    inputEmail.value === '' ||
    inputMessage.value === ''
  ) {
    // Si alguno de los campos esta vacio
    // Name
    if (inputName.value === '') {
      showNameError(
        'You must put the name so that I can address you in my answer.'
      );
      // Pongo que si el nombre es menor a 3 porque en el caso de que por ejemplo
      // el email este vacio, el nombre no se valida y se muestra el error de que
      // el nombre debe tener mas de 3 caracteres
    } else if (inputName.value.length < 3) {
      showNameError(
        'The name is not valid, it must contain a minimum of 3 letters.'
      );
    }
    // Email
    if (inputEmail.value === '') {
      showEmailError('You must put the email so that I can answer you.');
      // Aqui pasa lo mismo que con el comentario de arriba, aunque el email no este vacio
      // como se ha entrado a este bloque porque hay otro campo vacio, el email no se valida
      // y se muestra el error de que el email no es valido
    } else if (!emailInfo.valid) {
      showEmailError(
        'The email is not valid, you must enter a correct email to continue.'
      );
    } else if (emailInfo.block) {
      showEmailError(
        'Please, do not use the contact form to send advertising, its use is exclusive for hiring.'
      );
    }
    // Message
    if (inputMessage.value === '') {
      errorMessage.style.display = 'block';
      inputMessage.style.border = '0.6mm solid #e23838';
    }
  } else {
    // Si todos los campos estan llenos
    if (!emailInfo.valid || emailInfo.block || inputName.value.length < 3) {
      if (!emailInfo.valid) {
        showEmailError(
          'The email is not valid, you must enter a correct email to continue.'
        );
      }
      if (emailInfo.block) {
        showEmailError(
          'Please, do not use the contact form to send advertising, its use is exclusive for hiring.'
        );
        generatePopup({
          isError: true,
          text: 'Advertising is not allowed, the form is only for hiring',
          time: 5000
        });
      }
      if (inputName.value.length < 3) {
        showNameError(
          'The name is not valid, it must contain a minimum of 3 letters.'
        );
      }
    } else {
      generatePopup({
        text: 'Your message has been sent successfully',
        time: 3000
      });
    }
  }
});
