import {
  showNameError,
  showEmailError,
  validateEmail
} from './contactFunctions.js';
import { generatePopup } from './generatePopUp.js';

export function contact() {
  const btnSubmit = document.querySelector('.btn-submit');
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputMessage = document.querySelector('#message');
  const errorName = document.querySelector('.error-name');
  const errorEmail = document.querySelector('.error-email');
  const errorMessage = document.querySelector('.error-message');

  // const emailExpr = /^[A-z0-9_.+-]+@[A-z0-9-]+\.[A-z0-9-.]+$/;
  const validMessage = /(titoworld.dev)|(https?:\/\/)/;

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

      // Si alguno es incorrecto
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

        // Si todos son correctos
      } else {
        generatePopup({
          isError: false,
          text: 'Procesando solicitud...',
          time: 3000
        });
      }
    }
  });
}
