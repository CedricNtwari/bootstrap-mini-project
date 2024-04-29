function sendMail(contactForm) {
  emailjs
    .send('service_3qsjmej', 'template_t5lrlhb', {
      from_name: contactForm.name.value,
      reply_to: contactForm.emailaddress.value,
      message: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log('SUCCESS', response)
      },
      function (error) {
        console.log('FAILED', error)
      },
    )
  return false // To block from loading a new page
}
