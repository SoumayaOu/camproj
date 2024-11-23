// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form Validation
  document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
  });
  