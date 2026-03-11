// ── REGISTER PLUGINS ──
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ═══════════════════════════════════════════════════════
// ── FEATURE 1: PARTICLES BACKGROUND ──
// ═══════════════════════════════════════════════════════
(function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function rand(min, max) { return Math.random() * (max - min) + min; }

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      r: rand(0.5, 2.2),
      vx: rand(-0.15, 0.15),
      vy: rand(-0.15, 0.15),
      alpha: rand(0.2, 0.7),
      hue: Math.random() > 0.5 ? 265 : 186, // purple or cyan
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.alpha})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
})();

// ═══════════════════════════════════════════════════════
// ── FEATURE 2: CURSOR SPOTLIGHT ──
// ═══════════════════════════════════════════════════════
(function initCursorSpotlight() {
  const spotlight = document.getElementById('cursorSpotlight');
  document.addEventListener('mousemove', e => {
    gsap.to(spotlight, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: 'power2.out',
    });
  });
})();

// ═══════════════════════════════════════════════════════
// ── FEATURE 3: SCROLL PROGRESS BAR ──
// ═══════════════════════════════════════════════════════
(function initScrollProgress() {
  const bar = document.getElementById('progressBar');
  ScrollTrigger.create({
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
      gsap.set(bar, { width: `${self.progress * 100}%` });
    },
  });
})();

// ═══════════════════════════════════════════════════════
// ── FEATURE 4: MARQUEE (GSAP-POWERED INFINITE SCROLL) ──
// ═══════════════════════════════════════════════════════
(function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  const totalWidth = track.scrollWidth / 2; // half because we duplicated

  gsap.to(track, {
    x: -totalWidth,
    duration: 22,
    ease: 'none',
    repeat: -1,
  });
})();

// ═══════════════════════════════════════════════════════
// ── FEATURE 5: HERO INTRO TIMELINE ──
// ═══════════════════════════════════════════════════════
const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTL
  .from('#eyebrow',   { y: 24, opacity: 0, duration: 0.7 }, 0.2)
  .to('#eyebrow',     { opacity: 1, duration: 0 }, 0.2)
  .from('#title',     { y: 60, opacity: 0, duration: 0.9 }, 0.45)
  .to('#title',       { opacity: 1, duration: 0 }, 0.45)
  .from('#subtitle',  { y: 30, opacity: 0, duration: 0.8 }, 0.75)
  .to('#subtitle',    { opacity: 1, duration: 0 }, 0.75)
  .from('#btn',       { y: 20, opacity: 0, duration: 0.7 }, 1.0)
  .to('#btn',         { opacity: 1, duration: 0 }, 1.0)
  .from('#btnOutline',{ y: 20, opacity: 0, duration: 0.7 }, 1.1)
  .to('#btnOutline',  { opacity: 1, duration: 0 }, 1.1)
  .from('#navLinks',  { y: -20, opacity: 0, duration: 0.6 }, 0.1);

// ═══════════════════════════════════════════════════════
// ── FEATURE 6: TEXT SCRAMBLE ON TITLE HOVER ──
// ═══════════════════════════════════════════════════════
(function initTextScramble() {
  const titleSpan = document.getElementById('titleSpan');
  const original = 'Everything.';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*';
  let isScrambling = false;

  titleSpan.addEventListener('mouseenter', () => {
    if (isScrambling) return;
    isScrambling = true;
    let iteration = 0;
    const interval = setInterval(() => {
      titleSpan.textContent = original
        .split('')
        .map((char, idx) => {
          if (idx < iteration) return original[idx];
          return char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      if (iteration >= original.length) {
        clearInterval(interval);
        titleSpan.textContent = original;
        isScrambling = false;
      }
      iteration += 0.4;
    }, 35);
  });
})();

// ═══════════════════════════════════════════════════════
// ── FEATURE 7: CARDS SCROLL-TRIGGER + 3D TILT ──
// ═══════════════════════════════════════════════════════
gsap.from('.card', {
  opacity: 0,
  y: 70,
  duration: 0.8,
  stagger: 0.15,
  ease: 'back.out(1.5)',
  scrollTrigger: {
    trigger: '.cards',
    start: 'top 80%',
  },
  onComplete() {
    gsap.set('.card', { opacity: 1 });
  },
});

// 3D card tilt on mouseenter
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    // Update CSS variables for the radial glow
    card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);

    gsap.to(card, {
      rotateX: -dy * 10,
      rotateY: dx * 10,
      transformPerspective: 800,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    });
  });
});

// ═══════════════════════════════════════════════════════
// ── FEATURE 8: STATS COUNTER ──
// ═══════════════════════════════════════════════════════
(function initStatsCounter() {
  const statItems = document.querySelectorAll('.stat-item');
  const statNums  = document.querySelectorAll('.stat-num');

  gsap.from(statItems, {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.stats',
      start: 'top 80%',
      onEnter: () => {
        statNums.forEach(el => {
          const target = parseInt(el.dataset.target);
          gsap.to(el, {
            opacity: 1,
            duration: 0.5,
          });
          let obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate() {
              el.textContent = Math.round(obj.val);
            },
          });
        });
      },
    },
  });
})();

// ═══════════════════════════════════════════════════════
// ── FEATURE 9: BUTTON INTERACTIONS ──
// ═══════════════════════════════════════════════════════
[document.getElementById('btn'), document.getElementById('btnOutline')].forEach(b => {
  if (!b) return;
  b.addEventListener('mouseenter', () => gsap.to(b, { scale: 1.07, duration: 0.25 }));
  b.addEventListener('mouseleave', () => gsap.to(b, { scale: 1, duration: 0.45, ease: 'elastic.out(1, 0.5)' }));
});

// Explore Now → smooth scroll to cards
document.getElementById('btn').addEventListener('click', () => {
  gsap.to(window, {
    scrollTo: document.querySelector('.cards').offsetTop - 80,
    duration: 1.1,
    ease: 'power2.inOut',
  });
});

// ═══════════════════════════════════════════════════════
// ── FEATURE 10: NAV LINK SCROLL CLICK ──
// ═══════════════════════════════════════════════════════
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: target.offsetTop - 72,
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  });
});

// ═══════════════════════════════════════════════════════
// ── FEATURE 11: CTA SECTION ANIMATION ──
// ═══════════════════════════════════════════════════════
const ctaTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.cta',
    start: 'top 75%',
  },
});

ctaTL
  .from('#ctaEyebrow', { y: 20, opacity: 0, duration: 0.6 })
  .to('#ctaEyebrow',   { opacity: 1 }, '<')
  .from('#ctaTitle',   { y: 40, opacity: 0, duration: 0.8 }, '-=0.3')
  .to('#ctaTitle',     { opacity: 1 }, '<')
  .from('#ctaSub',     { y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
  .to('#ctaSub',       { opacity: 1 }, '<')
  .from('#ctaBtn',     { y: 20, opacity: 0, duration: 0.6 }, '-=0.2')
  .to('#ctaBtn',       { opacity: 1 }, '<');

const ctaBtn = document.getElementById('ctaBtn');
if (ctaBtn) {
  ctaBtn.addEventListener('mouseenter', () => gsap.to(ctaBtn, { scale: 1.07, duration: 0.25 }));
  ctaBtn.addEventListener('mouseleave', () => gsap.to(ctaBtn, { scale: 1, duration: 0.45, ease: 'elastic.out(1, 0.5)' }));
}

// ═══════════════════════════════════════════════════════
// ── FEATURE 12: FOOTER FADE IN ──
// ═══════════════════════════════════════════════════════
gsap.from('#footer', {
  y: 30,
  opacity: 0,
  duration: 0.9,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#footer',
    start: 'top 90%',
  },
  onStart() { gsap.set('#footer', { opacity: 0 }); },
  onComplete() { gsap.set('#footer', { opacity: 1 }); },
});
