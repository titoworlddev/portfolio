(function () {
  const btnSubmit = document.querySelector('.btn-submit')
  const inputName = document.getElementById('name')
  const inputEmail = document.getElementById('email')
  const inputMessage = document.getElementById('message')
  const errorName = document.querySelector('.error-name')
  const errorEmail = document.querySelector('.error-email')
  const errorMessage = document.querySelector('.error-message')

  const emailExpr = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

  const inputs = [inputName, inputEmail, inputMessage]
  inputs.forEach(input => {
    input.addEventListener('keyup', () => {
      if (input === inputName && errorName.style.display === 'block') {
        errorName.innerHTML = 'Debes poner el nombre para que pueda dirigirme a ti en mi respuesta.'
        errorName.style.display = 'none'
        inputName.style.border = 'none'
      }
      if (input === inputEmail && errorEmail.style.display === 'block') {
        errorEmail.innerHTML = 'Debes poner el email para que pueda responderte.'
        errorEmail.style.display = 'none'
        inputEmail.style.border = 'none'
      }
      if (input === inputMessage && errorMessage.style.display === 'block') {
        errorMessage.style.display = 'none'
        inputMessage.style.border = 'none'
      }
    })
  })

  btnSubmit.addEventListener('mouseup', () => {
    if (inputName.value === '' || inputEmail.value === '' || inputMessage.value === '') {
      if (inputName.value === '') {
        errorName.innerHTML = 'You must put the name so that I can address you in my answer.'
        errorName.style.display = 'block'
        inputName.style.border = '0.6mm solid #e23838'
      } else if (inputName.value.length < 3) {
        errorName.innerHTML = 'The name is not valid, it must contain a minimum of 3 letters.'
        errorName.style.display = 'block'
        inputName.style.border = '0.6mm solid #e23838'
      }
      if (inputEmail.value === '') {
        errorEmail.innerHTML = 'You must put the email so that I can answer you.'
        errorEmail.style.display = 'block'
        inputEmail.style.border = '0.6mm solid #e23838'
      } else if (!emailExpr.test(inputEmail.value)) {
        errorEmail.innerHTML = 'The email is not valid, you must enter a correct email to continue.'
        errorEmail.style.display = 'block'
        inputEmail.style.border = '0.6mm solid #e23838'
      }
      if (inputMessage.value === '') {
        errorMessage.style.display = 'block'
        inputMessage.style.border = '0.6mm solid #e23838'
      }
    } else {
      if (!emailExpr.test(inputEmail.value) || inputName.value.length < 3) {
        if (!emailExpr.test(inputEmail.value)) {
          errorEmail.innerHTML = 'The email is not valid, you must enter a correct email to continue.'
          errorEmail.style.display = 'block'
          inputEmail.style.border = '0.6mm solid #e23838'
        }
        if (inputName.value.length < 3) {
          errorName.innerHTML = 'The name is not valid, it must contain a minimum of 3 letters.'
          errorName.style.display = 'block'
          inputName.style.border = '0.6mm solid #e23838'
        }
      } else {
        const contactContainer = document.querySelector('.contact-container')
        const contactForm = document.getElementById('contact-form')

        const popup = document.createElement('div')
        popup.classList.add('contact-popup')
        popup.innerHTML = '<p>Your message has been sent successfully</p><i class="fa-solid fa-check"></i>'
        contactContainer.appendChild(popup)

        setTimeout(function () {
          contactForm.submit()
        }, 200)
      }
    }
  })
})()
