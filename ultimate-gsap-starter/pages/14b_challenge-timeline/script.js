import gsap from "gsap";

// Get all elements
const countdown = document.querySelector("#countdown");
const countNumber = document.querySelector(".count-number");
const rocket = document.querySelector("#rocket");
const flame = document.querySelector("#flame");
const smoke1 = document.querySelector("#smoke1");
const smoke2 = document.querySelector("#smoke2");
const smoke3 = document.querySelector("#smoke3");
const stars = document.querySelector("#stars");
const platform = document.querySelector(".platform");

// Get control buttons
const launchBtn = document.querySelector("#launchBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const reverseBtn = document.querySelector("#reverseBtn");
const restartBtn = document.querySelector("#restartBtn");

// Create the main timeline
const launchTimeline = gsap.timeline({ paused: true });

// Countdown sequence (3, 2, 1)
launchTimeline
  .to(countNumber, {
    innerHTML: 3,
    duration: 0,
    snap: { innerHTML: 1 }
  })
  .to(countdown, {
    scale: 1.5,
    duration: 0.3,
    ease: "back.out(2)"
  })
  .to(countdown, {
    scale: 1,
    duration: 0.3
  })
  .to(countNumber, {
    innerHTML: 2,
    duration: 0,
    snap: { innerHTML: 1 }
  })
  .to(countdown, {
    scale: 1.5,
    duration: 0.3,
    ease: "back.out(2)"
  })
  .to(countdown, {
    scale: 1,
    duration: 0.3
  })
  .to(countNumber, {
    innerHTML: 1,
    duration: 0,
    snap: { innerHTML: 1 }
  })
  .to(countdown, {
    scale: 1.5,
    duration: 0.3,
    ease: "back.out(2)"
  })
  .to(countdown, {
    scale: 1,
    duration: 0.3
  })
  // Countdown disappears
  .to(countdown, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
    ease: "back.in(2)"
  })
  // Add label for launch moment
  .add("launch")
  // Flame ignition
  .to(flame, {
    opacity: 1,
    scale: 1.2,
    duration: 0.2,
    ease: "power2.out"
  }, "launch")
  // Flame flicker effect
  .to(flame, {
    scaleY: 1.5,
    scaleX: 0.9,
    duration: 0.1,
    repeat: 3,
    yoyo: true,
    ease: "power1.inOut"
  }, "launch+=0.2")
  // Smoke effects
  .to([smoke1, smoke2, smoke3], {
    opacity: 0.7,
    y: -20,
    scale: 1.5,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.out"
  }, "launch+=0.1")
  .to([smoke1, smoke2, smoke3], {
    opacity: 0,
    y: -60,
    scale: 2.5,
    duration: 0.8,
    stagger: 0.1,
    ease: "power1.out"
  }, "launch+=0.3")
  // Platform shake
  .to(platform, {
    x: -3,
    duration: 0.05,
    repeat: 5,
    yoyo: true,
    ease: "none"
  }, "launch+=0.2")
  .to(platform, {
    x: 0,
    duration: 0.1
  })
  // Rocket lift-off
  .to(rocket, {
    y: -600,
    duration: 2.5,
    ease: "power2.in"
  }, "launch+=0.5")
  // Rocket rotation during flight
  .to(rocket, {
    rotation: -5,
    duration: 0.5,
    yoyo: true,
    repeat: 1,
    ease: "sine.inOut"
  }, "launch+=1")
  // Stars twinkling and moving
  .to(stars, {
    opacity: 1,
    backgroundPosition: "50% 50%",
    duration: 2,
    ease: "none"
  }, "launch")
  // Flame grows during flight
  .to(flame, {
    scaleY: 2,
    duration: 1.5,
    ease: "power1.out"
  }, "launch+=0.8");

// Control button event listeners
launchBtn.addEventListener("click", () => {
  launchTimeline.play();
});

pauseBtn.addEventListener("click", () => {
  launchTimeline.pause();
});

reverseBtn.addEventListener("click", () => {
  launchTimeline.reverse();
});

restartBtn.addEventListener("click", () => {
  launchTimeline.restart();
});
