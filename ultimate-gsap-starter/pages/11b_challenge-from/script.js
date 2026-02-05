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

// 2. Interaction Animation using gsap.to()
// Rotates the card on hover to reveal the back
card.addEventListener('mouseenter', () => {
    gsap.to(card, {
        rotationY: 180,
        duration: 0.8,
        ease: "power2.inOut" // Smooth eases for flipping
    });
});

// Flips the card back when the mouse leaves
card.addEventListener('mouseleave', () => {
    gsap.to(card, {
        rotationY: 0,
        duration: 0.8,
        ease: "power2.inOut"
    });
});
