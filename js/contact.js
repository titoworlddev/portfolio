export function contact() {
  const btnSubmit = document.querySelector('.btn-submit');
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputMessage = document.querySelector('#message');
  const errorName = document.querySelector('.error-name');
  const errorEmail = document.querySelector('.error-email');
  const errorMessage = document.querySelector('.error-message');
  const API_KEY = '1d216a8a9emsh60e95ffc5b9ef52p11cdc8jsn9594ac986edd';
  const API_HOST = 'mailcheck.p.rapidapi.com';
  const API_URL = 'https://mailcheck.p.rapidapi.com/?domain=';

  // const emailExpr = /^[A-z0-9_.+-]+@[A-z0-9-]+\.[A-z0-9-.]+$/;
  const validMessage = /(titoworld.dev)|(https?:\/\/)/;

  const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };

  const generatePopup = ({ isError = true, text, time }) => {
    const contactContainer = document.querySelector('.contact-popup-container');
    const contactForm = document.querySelector('#contact-form');
    const popup = document.querySelector('.contact-popup');

    if (isError) {
      popup.classList.remove('contact-popup');
      popup.classList.add('contact-popup-error');
    }

    const icon = isError ? 'fa-xmark' : 'fa-check';
    popup.innerHTML = `<p>${text}</p><i class="fa-solid ${icon}"></i>`;

    contactContainer.style.display = 'flex';

    setTimeout(function () {
      contactContainer.style.display = 'none';
      popup.classList.add('contact-popup');
      popup.classList.remove('contact-popup-error');
      if (isError === false) contactForm.submit();
    }, time);
  };

  const inputs = [inputName, inputEmail, inputMessage];
  inputs.forEach(input => {
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

  const showEmailError = text => {
    errorEmail.innerHTML = text;
    errorEmail.style.display = 'block';
    inputEmail.style.border = '0.6mm solid #e23838';
  };
  const showNameError = text => {
    errorName.innerHTML = text;
    errorName.style.display = 'block';
    inputName.style.border = '0.6mm solid #e23838';
  };

  const validateEmail = async email => {
    return await fetch(`${API_URL}${email}`, OPTIONS)
      .then(response => response.json())
      .catch(err => console.error(err));
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
          'Debes poner el nombre para que pueda dirigirme a ti en mi respuesta.'
        );
        // Pongo que si el nombre es menor a 3 porque en el caso de que por ejemplo
        // el email este vacio, el nombre no se valida y se muestra el error de que
        // el nombre debe tener mas de 3 caracteres
      } else if (inputName.value.length < 3) {
        showNameError(
          'El nombre no es válido, debe contener un mínimo de 3 letras.'
        );
      }
      // Email
      if (inputEmail.value === '') {
        showEmailError('Debes poner el email para que pueda responderte.');
        // Aqui pasa lo mismo que con el comentario de arriba, aunque el email no este vacio
        // como se ha entrado a este bloque porque hay otro campo vacio, el email no se valida
        // y se muestra el error de que el email no es valido
      } else if (!emailInfo.valid) {
        showEmailError(
          'El email no es válido, debes ingresar un email correcto para continuar.'
        );
      } else if (emailInfo.block) {
        showEmailError(
          'Por favor, no uses el formulario de contacto para enviar publicidad, su uso es exclusivo para contrataciones.'
        );
      }
      // Message
      if (inputMessage.value === '') {
        errorMessage.style.display = 'block';
        inputMessage.style.border = '0.6mm solid #e23838';
      }
    } else {
      // Si todos los campos estan llenos
      if (
        !emailInfo.valid ||
        emailInfo.block ||
        inputEmail.value.includes('reply') ||
        inputEmail.value.includes('business') ||
        validMessage.test(inputMessage.value) ||
        inputName.value.length < 3
      ) {
        if (!emailInfo.valid) {
          showEmailError(
            'El email no es válido, debes ingresar un email correcto para continuar.'
          );
        }
        if (
          emailInfo.block ||
          inputEmail.value.includes('reply') ||
          inputEmail.value.includes('business')
        ) {
          if (!emailInfo.valid) {
            showEmailError(
              'El email no es válido, debes ingresar un email correcto para continuar.'
            );
          } else {
            showEmailError(
              'Por favor, no uses el formulario de contacto para enviar publicidad, su uso es exclusivo para contrataciones.'
            );
            generatePopup({
              text: 'Los anuncios no están permitidos, el formulario es solo para contrataciones',
              time: 5000
            });
          }
        }
        if (validMessage.test(inputMessage.value)) {
          generatePopup({
            text: 'Los anuncios no están permitidos, el formulario es solo para contrataciones',
            time: 5000
          });
        }
        if (inputName.value.length < 3) {
          showNameError(
            'El nombre no es válido, debe contener un mínimo de 3 letras.'
          );
        }
      } else {
        generatePopup({
          isError: false,
          text: 'Tu mensaje ha sido enviado',
          time: 3000
        });
      }
    }
  });
}
