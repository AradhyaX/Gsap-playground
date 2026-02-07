import gsap from "gsap";

// Initial state: Hidden below view
gsap.set(".toast", { y: 100, opacity: 0, scale: 0.9 });

const animateToast = (selector, nextCallback) => {
  gsap.to(selector, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(selector, {
        delay: 2.5,
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "power1.in",
        onComplete: nextCallback,
      });
    },
  });
};
