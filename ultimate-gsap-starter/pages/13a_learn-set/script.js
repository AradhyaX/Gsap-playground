import gsap from "gsap";

// Initial set
gsap.set(".gsap-box", {
  x: 200,
  y: 50,
  scale: 1.5,
  opacity: 0.5,
  backgroundColor: "green",
  rotation: 45,
});

// Added reset animation
gsap.to(".gsap-box", {
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  backgroundColor: "transparent",
  rotation: 0,
  duration: 2,
  delay: 1,
});
