import gsap from "gsap";

// gsap.set() allows you to set properties instantly (0 duration)
gsap.set(".gsap-box", {
  x: 200,
  y: 50,
  scale: 1.5,
  opacity: 0.5,
  backgroundColor: "green",
  rotation: 45,
});

// Animate back to original state to show the contrast
gsap.to(".gsap-box", {
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  backgroundColor: "transparent",
  rotation: 0,
  duration: 2,
  delay: 1,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
});
