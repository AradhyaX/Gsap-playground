// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ── 1. HERO INTRO ANIMATION ──
gsap.to('#eyebrow', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
gsap.from('#eyebrow', { y: 20 });

gsap.to('#title', { opacity: 1, y: 0, duration: 0.9, delay: 0.5 });
gsap.from('#title', { y: 50 });

gsap.to('#subtitle', { opacity: 1, y: 0, duration: 0.8, delay: 0.8 });
gsap.from('#subtitle', { y: 30 });

gsap.to('#btn', { opacity: 1, y: 0, duration: 0.7, delay: 1.1 });
gsap.from('#btn', { y: 20 });

// ── 2. CARDS SCROLL ANIMATION ──
gsap.to('.card', {
  opacity: 1,
  y: 0,
  duration: 0.7,
  stagger: 0.2,               // each card animates 0.2s after the last
  ease: 'back.out(1.5)',
  scrollTrigger: {
    trigger: '.cards',        // start when .cards enters the screen
    start: 'top 80%',
  },
});

gsap.from('.card', { y: 60 });

// ── 3. BUTTON HOVER ──
const btn = document.getElementById('btn');

btn.addEventListener('mouseenter', () => {
  gsap.to(btn, { scale: 1.08, duration: 0.25 });
});

btn.addEventListener('mouseleave', () => {
  gsap.to(btn, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
});

// ── 4. BUTTON CLICK → smooth scroll to cards ──
btn.addEventListener('click', () => {
  gsap.to(window, {
    scrollTo: document.querySelector('.cards').offsetTop,
    duration: 1,
    ease: 'power2.inOut',
  });
});

// ── 5. FOOTER FADE IN ──
gsap.to('#footer', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#footer',
    start: 'top 90%',
  },
});
gsap.from('#footer', { y: 30 });
