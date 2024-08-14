//EMAIL JS
const contactForm = document.getElementById('contact-form'), 
 contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
 e.preventDefault()

 emailjs.sendForm('service_qu2bhu7','template_2qmi7pf','#contact-form','gmiSNWZvOItz-pdlT')
  .then(() => {
   //show sent message
   contactMessage.textContent = 'Mensagem enviada com sucesso! :)'

   //remove message after five seconds
   setTimeout(() =>{
    contactMessage.textContent = ''
   }, 5000)

   //clear input fields
   contactForm.reset()
  })
}

contactForm.addEventListener('submit', sendEmail)