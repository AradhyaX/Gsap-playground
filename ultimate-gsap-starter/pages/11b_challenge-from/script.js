import gsap from 'gsap';

// Select the card element
const card = document.querySelector('#card');

// 1. Entrance Animation using gsap.from()
// This brings the card onto the screen smoothly
gsap.from(card, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2
});
