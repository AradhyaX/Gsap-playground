// 16 — Sugarcraft Sweets Landing Page — script.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════════════
   1. HERO ENTRANCE — staggered reveal
   ══════════════════════════════════════════════ */
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl
  .from("#navbar", { y: -80, opacity: 0, duration: 0.8 })
  .to("#heroEyebrow", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
  .from("#heroEyebrow", { y: 30 }, "<")
  .to("#heroTitle", { opacity: 1, y: 0, duration: 0.7 }, "-=0.2")
  .from("#heroTitle", { y: 50 }, "<")
  .to("#heroSub", { opacity: 1, y: 0, duration: 0.6 }, "-=0.25")
  .from("#heroSub", { y: 30 }, "<")
  .to("#heroActions", { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
  .from("#heroActions", { y: 20 }, "<")
  .from("#heroVisual", { scale: 0.7, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5")
  .to("#scrollHintHero", { opacity: 1, duration: 0.5 });

/* ══════════════════════════════════════════════
   2. BACKGROUND CIRCLE PARALLAX
   ══════════════════════════════════════════════ */
gsap.to(".c1", {
  y: -120,
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 2 },
});
gsap.to(".c2", {
  y: 80,
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 3 },
});

/* ══════════════════════════════════════════════
   3. STATS BAND — count-up effect
   ══════════════════════════════════════════════ */
gsap.from(".stat-item", {
  y: 60,
  opacity: 0,
  stagger: 0.15,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".stats-band",
    start: "top 80%",
  },
});

/* ══════════════════════════════════════════════
   4. PRODUCT CARDS — stagger from below
   ══════════════════════════════════════════════ */
gsap.from("#featTag, #featTitle", {
  y: 40, opacity: 0, stagger: 0.2, duration: 0.7, ease: "power2.out",
  scrollTrigger: { trigger: ".featured", start: "top 80%" },
});

gsap.from(".product-card", {
  y: 80,
  opacity: 0,
  scale: 0.95,
  stagger: {
    each: 0.12,
    from: "start",
  },
  duration: 0.65,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#productsGrid",
    start: "top 80%",
  },
});

/* ══════════════════════════════════════════════
   5. ABOUT SECTION
   ══════════════════════════════════════════════ */
gsap.from("#aboutText > *", {
  x: -60,
  opacity: 0,
  stagger: 0.15,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: { trigger: "#about", start: "top 75%" },
});

gsap.from(".step-card", {
  scale: 0.85,
  opacity: 0,
  stagger: 0.12,
  duration: 0.6,
  ease: "back.out(1.5)",
  scrollTrigger: { trigger: "#aboutSteps", start: "top 80%" },
});

/* ══════════════════════════════════════════════
   6. MARQUEE — GSAP infinite horizontal scroll
   ══════════════════════════════════════════════ */
const track = document.getElementById("marqueeTrack");
// Duplicate content is already in HTML; just animate
gsap.to(track, {
  x: () => -(track.scrollWidth / 2),
  duration: 25,
  ease: "none",
  repeat: -1,
});

/* ══════════════════════════════════════════════
   7. TESTIMONIALS — slide in from sides
   ══════════════════════════════════════════════ */
gsap.from("#testTag, #testTitle", {
  y: 40, opacity: 0, stagger: 0.2, duration: 0.7,
  scrollTrigger: { trigger: ".testimonials", start: "top 80%" },
});

gsap.from("#t1", {
  x: -80, opacity: 0, duration: 0.7, ease: "power2.out",
  scrollTrigger: { trigger: "#testimonialsGrid", start: "top 80%" },
});
gsap.from("#t2", {
  y: 80, opacity: 0, duration: 0.7, ease: "power2.out", delay: 0.1,
  scrollTrigger: { trigger: "#testimonialsGrid", start: "top 80%" },
});
gsap.from("#t3", {
  x: 80, opacity: 0, duration: 0.7, ease: "power2.out", delay: 0.2,
  scrollTrigger: { trigger: "#testimonialsGrid", start: "top 80%" },
});

/* ══════════════════════════════════════════════
   8. CTA BANNER — scale in
   ══════════════════════════════════════════════ */
gsap.from("#ctaContent > *", {
  y: 50,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: { trigger: "#ctaBanner", start: "top 80%" },
});

gsap.from(".cta-emojis span", {
  scale: 0,
  opacity: 0,
  stagger: 0.08,
  duration: 0.5,
  ease: "back.out(2)",
  scrollTrigger: { trigger: "#ctaBanner", start: "top 80%" },
});

/* ══════════════════════════════════════════════
   9. FOOTER — fade up
   ══════════════════════════════════════════════ */
gsap.from(".footer > *", {
  y: 40, opacity: 0, stagger: 0.15, duration: 0.7,
  scrollTrigger: { trigger: ".footer", start: "top 85%" },
});

/* ══════════════════════════════════════════════
   10. NAVBAR — shrink on scroll
   ══════════════════════════════════════════════ */
ScrollTrigger.create({
  start: "top -80",
  onUpdate: (self) => {
    gsap.to(".navbar", {
      padding: self.progress > 0 ? "0.6rem 3rem" : "1rem 3rem",
      boxShadow: self.progress > 0 ? "0 4px 24px rgba(59,26,8,0.1)" : "none",
      duration: 0.3,
    });
  },
});

/* ══════════════════════════════════════════════
   11. PRODUCT CARD — magnetic hover
   ══════════════════════════════════════════════ */
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    gsap.to(card, { rotateX: -dy * 6, rotateY: dx * 6, duration: 0.4, transformPerspective: 800 });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
  });
});

/* ══════════════════════════════════════════════
   12. ADD TO BOX buttons — pop feedback
   ══════════════════════════════════════════════ */
document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    gsap.fromTo(btn,
      { scale: 0.9 },
      { scale: 1, duration: 0.4, ease: "elastic.out(1.5, 0.4)" }
    );
    const original = btn.textContent;
    btn.textContent = "✓ Added!";
    btn.style.background = "var(--rose)";
    btn.style.color = "#fff";
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = "";
      btn.style.color = "";
    }, 1200);
  });
});
