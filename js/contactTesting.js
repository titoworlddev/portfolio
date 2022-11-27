(function () {
  const $ = (selector) => document.querySelector(selector);

  const btnSubmit = $('.btn-submit');
  const API_KEY = process.env.API_KEY;
  const API_HOST = process.env.API_HOST;
  const API_URL = process.env.API_URL;

  btnSubmit.addEventListener('mouseup', async () => {
    console.log('Submit button clicked');
    console.log(API_KEY + ' ' + API_HOST + ' ' + API_URL);
  });
})();
