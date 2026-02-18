import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animate each box when it scrolls into view
gsap.utils.toArray(".box").forEach((box) => {
  gsap.from(box, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: box,
      start: "top 80%",  // when top of box hits 80% of viewport
      toggleActions: "play none none reverse",
    },
  });
});
