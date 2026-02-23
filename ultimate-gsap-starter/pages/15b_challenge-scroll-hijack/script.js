import gsap from "gsap";

// ─── State ────────────────────────────────────────────────────────────────────
const slides      = [...document.querySelectorAll(".slide")];
const dots        = [...document.querySelectorAll(".dot")];
const progressBar = document.getElementById("progressBar");
const counterEl   = document.getElementById("currentSlide");
const scrollHint  = document.getElementById("scrollHint");

const TOTAL       = slides.length;
let   current     = 0;
let   isAnimating = false;

// ─── Helper: show the correct slide ────────────────────────────────────────────
function goTo(index) {
  if (index === current || isAnimating) return;
  isAnimating = true;

  const direction  = index > current ? 1 : -1;
  const outSlide   = slides[current];
  const inSlide    = slides[index];
  const outContent = outSlide.querySelector(".slide-content");
  const outVisual  = outSlide.querySelector(".slide-visual");
  const inContent  = inSlide.querySelector(".slide-content");
  const inVisual   = inSlide.querySelector(".slide-visual");

  // Make new slide visible (pointer-events still off until animation ends)
  inSlide.classList.add("is-active");

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete() {
      outSlide.classList.remove("is-active");
      // snap done — reset flags
      current     = index;
      isAnimating = false;

      // update UI
      updateDots();
      updateProgress();
      updateCounter();

      // Hide scroll hint after first move
      if (current > 0) scrollHint.classList.add("hidden");
      else             scrollHint.classList.remove("hidden");
    },
  });

  // ── Out animation ──────────────────────────────────────────
  tl.to(outContent, { y: direction * -60, opacity: 0, duration: 0.45 }, 0)
    .to(outVisual,  { scale: 0.8, opacity: 0, duration: 0.45 }, 0);

  // ── In animation (starts halfway through out) ──────────────
  gsap.set(inContent, { y: direction * 80, opacity: 0 });
  gsap.set(inVisual,  { scale: 1.15, opacity: 0 });
  gsap.set(inSlide,   { opacity: 1 });

  tl.to(inContent, { y: 0, opacity: 1, duration: 0.55 }, 0.25)
    .to(inVisual,  { scale: 1, opacity: 1, duration: 0.55 }, 0.25);
}

// ─── Initial setup ─────────────────────────────────────────────────────────────
function init() {
  slides.forEach((slide, i) => {
    if (i === 0) {
      slide.classList.add("is-active");
      gsap.set(slide, { opacity: 1 });
    } else {
      gsap.set(slide, { opacity: 0 });
    }
  });

  // Animate in the hero slide on load
  const hero = slides[0];
  gsap.from(hero.querySelector(".slide-content"), {
    y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2,
  });
  gsap.from(hero.querySelector(".slide-visual"), {
    scale: 0.75, opacity: 0, duration: 1.1, ease: "back.out(1.5)", delay: 0.35,
  });

  updateDots();
  updateProgress();
  updateCounter();
}

// ─── UI updaters ───────────────────────────────────────────────────────────────
function updateDots() {
  dots.forEach((d, i) => d.classList.toggle("active", i === current));
}

function updateProgress() {
  const pct = (current / (TOTAL - 1)) * 100;
  gsap.to(progressBar, { width: pct + "%", duration: 0.45, ease: "power2.out" });
}

function updateCounter() {
  gsap.to(counterEl, {
    textContent: current + 1,
    duration: 0.2,
    ease: "none",
    snap: { textContent: 1 },
  });
}

// ─── Wheel / Keyboard / Touch events ──────────────────────────────────────────

// Wheel
let wheelCooldown = false;
window.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (wheelCooldown) return;
  wheelCooldown = true;
  setTimeout(() => (wheelCooldown = false), 900); // throttle

  if (e.deltaY > 0 && current < TOTAL - 1) goTo(current + 1);
  if (e.deltaY < 0 && current > 0)         goTo(current - 1);
}, { passive: false });

// Keyboard arrows / space
window.addEventListener("keydown", (e) => {
  if (["ArrowDown", "ArrowRight", " "].includes(e.key) && current < TOTAL - 1) {
    e.preventDefault(); goTo(current + 1);
  }
  if (["ArrowUp", "ArrowLeft"].includes(e.key) && current > 0) {
    e.preventDefault(); goTo(current - 1);
  }
});

// Touch swipe
let touchStartY = 0;
window.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener("touchend", (e) => {
  const delta = touchStartY - e.changedTouches[0].clientY;
  if (Math.abs(delta) < 40) return; // ignore tiny swipes
  if (delta > 0 && current < TOTAL - 1) goTo(current + 1);
  if (delta < 0 && current > 0)         goTo(current - 1);
});

// ─── Dot clicks ────────────────────────────────────────────────────────────────
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const idx = parseInt(dot.dataset.index, 10);
    goTo(idx);
  });
});

// ─── Boot ──────────────────────────────────────────────────────────────────────
init();
