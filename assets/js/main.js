// CorianderFare Main Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  function openDrawer() {
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close drawer on link click
  document.querySelectorAll('.mobile-drawer a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Reservation Form Handler
  const resForm = document.getElementById('table-reservation-form');
  const formFeedback = document.getElementById('form-feedback');

  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = resForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Transmitting Reservation...';
      }

      setTimeout(() => {
        resForm.reset();
        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.className = 'form-alert form-alert-success';
          formFeedback.innerHTML = '<strong>Reservation Requested!</strong> Thank you for your interest in CorianderFare Mercer Dining Salon. Our ma&icirc;tre d&rsquo; will confirm table availability within 24 business hours.';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'Confirm Reservation Request';
        }
      }, 750);
    });
  }
});
