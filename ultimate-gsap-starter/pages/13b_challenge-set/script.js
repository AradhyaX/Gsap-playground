import gsap from "gsap";

// Use gsap.set() to scatter the boxes initially
gsap.set(".box", {
  opacity: 0,
  background: "#1e1e1e",
  y: () => Math.random() * 500 - 200,
  x: () => Math.random() * 500 - 200,
  scale: 0,
  rotation: () => Math.random() * 300,
});

// Animate them back to their original state
gsap.to(".box", {
  opacity: 1,
  background: "#eab308", // This matches the primary color usually
  y: 0,
  x: 0,
  scale: 1,
  rotation: 0,
  duration: 2,
  stagger: 0.1,
  ease: "elastic.out(1, 0.3)",
});
