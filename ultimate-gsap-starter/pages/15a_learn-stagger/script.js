import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Stagger: animate all boxes with a cascading delay
gsap.from(".box", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
  },
});
