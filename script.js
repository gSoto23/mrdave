// Mobile menu + footer year + Instagram embed process
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const btn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const tryProcess = () => {
    if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
  };

  let tries = 0;
  const t = setInterval(() => {
    tries += 1;
    tryProcess();
    if (tries >= 6) clearInterval(t);
  }, 800);
})();
