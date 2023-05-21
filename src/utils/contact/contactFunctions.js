export const showEmailError = text => {
  const inputEmail = document.querySelector('#email');
  const errorEmail = document.querySelector('.error-email');

  errorEmail.innerHTML = text;
  errorEmail.style.display = 'block';
  inputEmail.style.border = '0.6mm solid #e23838';
};

export const showNameError = text => {
  const inputName = document.querySelector('#name');
  const errorName = document.querySelector('.error-name');

  errorName.innerHTML = text;
  errorName.style.display = 'block';
  inputName.style.border = '0.6mm solid #e23838';
};

export const validateEmail = async email => {
  const API_KEY = '1d216a8a9emsh60e95ffc5b9ef52p11cdc8jsn9594ac986edd';
  const API_HOST = 'mailcheck.p.rapidapi.com';
  const API_URL = 'https://mailcheck.p.rapidapi.com/?domain=';
  const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };

  return await fetch(`${API_URL}${email}`, OPTIONS)
    .then(response => response.json())
    .catch(err => console.error(err));
};
