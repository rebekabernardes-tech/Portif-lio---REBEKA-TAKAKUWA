// Scroll suave para os links da sidebar e do botão "voltar ao topo"
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Placeholder de envio do formulário de contato (sem back-end definido)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO-CONFIG: ligar a um serviço de envio de e-mail (ex.: Formspree, EmailJS)
    alert('Mensagem pronta para envio! Configure o serviço de e-mail (ex.: Formspree/EmailJS) em js/script.js.');
    form.reset();
  });
}