// Small script: nav toggle + simple contact form -> open mailto fallback
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  navToggle && navToggle.addEventListener('click', () => {
    if (!nav) return;
    const shown = nav.style.display === 'flex';
    nav.style.display = shown ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
  });

  // Year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Contact form -> fallback to mailto
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('name').value || '');
      const company = encodeURIComponent(document.getElementById('company').value || '');
      const email = encodeURIComponent(document.getElementById('email').value || '');
      const message = encodeURIComponent(document.getElementById('message').value || '');
      const subject = encodeURIComponent('Contact from website — ' + (company || name || 'new inquiry'));
      const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nCompany: ${decodeURIComponent(company)}\nEmail: ${decodeURIComponent(email)}\n\nMessage:\n${decodeURIComponent(message)}`);
      // open mail client
      window.location.href = `mailto:support@creativecomplexworks.com?subject=${subject}&body=${body}`;
    });
  }
});
