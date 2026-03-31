const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('change', () => {
  document.body.style.overflow = menuToggle.checked ? 'hidden' : '';
});
