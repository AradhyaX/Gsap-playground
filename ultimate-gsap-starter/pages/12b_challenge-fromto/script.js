
import gsap from "gsap";

const buttons = document.querySelectorAll(".reactions button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const emoji = button.getAttribute("data-emoji");
    createBubble(emoji, button);
  });
});

function createBubble(emoji, button) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = emoji;

  document.body.appendChild(bubble);

  const rect = button.getBoundingClientRect();
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  const centerX = rect.left + rect.width / 2 + scrollX;
  const topY = rect.top + scrollY;

  bubble.style.left = `${centerX}px`;
  bubble.style.top = `${topY}px`;

  gsap.set(bubble, {
    xPercent: -50,
    yPercent: -100,
  });

  const randomRotation = Math.random() * 60 - 30;
  const floatDistance = Math.random() * 50 + 100;

  gsap.fromTo(
    bubble,
    {
      opacity: 1,
      scale: 0.5,
      y: 10,
      rotation: 0,
    },
    {
      opacity: 0,
      scale: 1.5,
      y: -floatDistance,
      x: (Math.random() - 0.5) * 40,
      rotation: randomRotation,
      duration: 2,
      ease: "power1.out",
      onComplete: () => {
        bubble.remove();
      },
    }
  );
}
