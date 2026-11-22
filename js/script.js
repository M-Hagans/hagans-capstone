// setOpen handles the mobile menu (WHAT IT IS).
// It toggles a class on the body and updates ARIA (WHAT IT DOES).
// This tells screen readers if the menu is open (WHAT IT MEANS).
(function() {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('primary-nav');
  const body = document.body;

  function toggleMenu() {
    const isOpen = body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', isOpen);
  }

  if (btn) {
    btn.addEventListener('click', toggleMenu);
  }

  // Close menu on link click (WHAT IT IS).
  // It hides the menu after a link is picked (WHAT IT DOES).
  // This improves the user experience on phones (WHAT IT MEANS).
  if (nav) {
    nav.addEventListener('click', () => {
      body.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  // Close menu on Escape (WHAT IT IS).
  // It listens for the Escape key (WHAT IT DOES).
  // This is a standard accessibility rule (WHAT IT MEANS).
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) {
      toggleMenu();
    }
  });
})();