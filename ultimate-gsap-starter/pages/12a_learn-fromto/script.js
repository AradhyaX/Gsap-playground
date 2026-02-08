import gsap from "gsap";

gsap.fromTo(
  ".bar",
  {
    scaleY: 0.1,
    opacity: 0.3,
  },
  {
    scaleY: 1,
    opacity: 1,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    stagger: 0.1,
  }
);
