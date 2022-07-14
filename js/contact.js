const btnSubmit = document.querySelector('.btn-submit')

btnSubmit.addEventListener('mouseup', (e) => {
  e.preventDefault()
  const contactContainer = document.querySelector('.contact-container')
  const contactForm = document.getElementById('contact-form')

  const popup = document.createElement('div')
  popup.classList.add('contact-popup')
  popup.innerHTML = '<p>Tu mensaje se ha enviado correctamente</p><i class="fa-solid fa-check"></i>'
  contactContainer.appendChild(popup)

  setTimeout(function () {
    contactForm.submit()
  }, 500)
})
