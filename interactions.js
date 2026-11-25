const hero = document.querySelector('.hero');
const motion = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

hero.addEventListener('pointermove', (event) => {
  if (!motion.matches || event.pointerType === 'touch') return;

  const bounds = hero.getBoundingClientRect();
  hero.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
  hero.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reducedMotion.matches && !window.location.hash) {
  const shower = document.createElement('div');
  shower.className = 'money-rain';
  shower.setAttribute('aria-hidden', 'true');

  for (let index = 0; index < 26; index += 1) {
    const piece = document.createElement('span');
    piece.className = index % 4 === 0 ? 'money-piece money-coin' : 'money-piece money-bill';
    piece.textContent = '$';
    piece.style.setProperty('--left', `${(index + Math.random()) * 100 / 26}%`);
    piece.style.setProperty('--delay', `${Math.random() * 650}ms`);
    piece.style.setProperty('--duration', `${1450 + Math.random() * 650}ms`);
    piece.style.setProperty('--drift', `${Math.random() * 120 - 60}px`);
    piece.style.setProperty('--angle', `${Math.random() * 100 - 50}deg`);
    shower.append(piece);
  }

  document.body.append(shower);
  window.setTimeout(() => shower.remove(), 2800);
}
