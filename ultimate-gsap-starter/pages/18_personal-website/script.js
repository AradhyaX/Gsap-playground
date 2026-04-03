// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Clean up any existing ScrollTriggers on HMR reloads
ScrollTrigger.getAll().forEach(t => t.kill());

// Custom Cursor Animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out"
  });
});

// Cursor Hover Effects
const interactables = document.querySelectorAll('a, button, .skill-card, .glass-panel');

interactables.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power2.out" });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});

// Hero Elements Entry Animation
const heroTimeline = gsap.timeline();

// Navbar slides down
heroTimeline.fromTo(".navbar", 
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
)
// Hero text lines staggering 
.fromTo(".hero-title .line > span", 
  { y: 100, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
  { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "power4.out" }, 
  "-=0.7"
)
// Other top sections fading up
.fromTo(".hero-label, .hero-subtitle, .hero-desc, .cta-container, .scroll-wrapper", 
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" }, 
  "-=0.8"
);

// Ambient Glow Parallax (Mouse movement follows background glowing orbs softly)
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.clientX) * 0.03;
  const y = (window.innerHeight / 2 - e.clientY) * 0.03;
  
  gsap.to(".glow-1", {
    x: x,
    y: y,
    duration: 1,
    ease: "power2.out"
  });
  
  gsap.to(".glow-2", {
    x: -x,
    y: -y,
    duration: 1,
    ease: "power2.out"
  });
});

// Scroll Animations for Skills
gsap.fromTo(".skill-card", 
  { y: 50, opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 75%",
      toggleActions: "play none none reverse"
    },
    y: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 0.8,
    ease: "back.out(1.4)"
  }
);

// Scroll Animation for Experience Section
gsap.fromTo(".experience-card", 
  { y: 60, opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".experience",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out"
  }
);

// Scroll Animation for Projects Section
const projectTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});

projectTl.fromTo(".project-wrapper", 
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
)
.fromTo(".project-img img", 
  { scale: 1.2 },
  { scale: 1, duration: 1.5, ease: "power3.out" }, 
  "-=1"
);

// Footer Scroll Animation
gsap.fromTo("footer .footer-content", 
  { y: 40, opacity: 0 },
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  }
);
