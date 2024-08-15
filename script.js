//MENU TOGGLE
let menu = document.querySelector('#nav-toggle');
let navlist = document.querySelector('.nav__list');

menu.onclick = () => {
  menu.classList.toggle('ri-close-large-line');
  navlist.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('ri-close-large-line');
  navlist.classList.remove('active');
}

//EMAIL JS
const contactForm = document.getElementById('contact-form'), 
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm('service_qu2bhu7','template_au5haka','#contact-form','gmiSNWZvOItz-pdlT')
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
