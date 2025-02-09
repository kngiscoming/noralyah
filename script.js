document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    element.style.animationPlayState = 'paused';
    observer.observe(element);
  });

  const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = signupForm.querySelector('input[type="email"]');
    if (emailInput.value) {
      alert('Merci de votre inscription ! Nous vous tiendrons informé.');
      emailInput.value = '';
    }
  });
});