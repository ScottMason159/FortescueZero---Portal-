const railToggle = document.querySelector('.rail-toggle');

railToggle?.addEventListener('click', () => {
  const isMobile = window.matchMedia('(max-width: 850px)').matches;
  document.body.classList.toggle(isMobile ? 'rail-open' : 'rail-collapsed');
  const expanded = isMobile ? document.body.classList.contains('rail-open') : !document.body.classList.contains('rail-collapsed');
  railToggle.setAttribute('aria-expanded', String(expanded));
  railToggle.querySelector('.sr-only').textContent = expanded ? 'Collapse navigation' : 'Expand navigation';
});
