# 17 — GSAP Showcase 🚀

A polished, feature-rich GSAP showcase page demonstrating a wide range of animation techniques.

## 🎯 Features Added

| # | Feature | Description |
|---|---------|-------------|
| 1 | **Particle Canvas** | 70 floating particles (purple/cyan) rendered on a `<canvas>` element |
| 2 | **Cursor Spotlight** | A radial glow that smoothly follows the mouse via GSAP |
| 3 | **Scroll Progress Bar** | Gradient bar at the top that grows as you scroll |
| 4 | **GSAP Marquee** | Infinite horizontal ticker powered by `gsap.to` with `repeat: -1` |
| 5 | **Hero Intro Timeline** | Staggered hero reveal using a GSAP `timeline()` |
| 6 | **Text Scramble** | Hover over "Everything." in the title for a character scramble effect |
| 7 | **3D Card Tilt** | Cards tilt in 3D with a spotlight glow following the cursor |
| 8 | **Stats Counter** | Numbers count up from 0 with ScrollTrigger |
| 9 | **Button Interactions** | Hover scale + elastic spring animation on mouse leave |
| 10 | **Nav Scroll** | Clicking nav links smooth-scrolls via GSAP ScrollToPlugin |
| 11 | **CTA Animation** | Scroll-triggered staggered reveal for the Call-To-Action section |
| 12 | **Footer Fade** | Footer fades + slides up on scroll |

## 🛠 Techniques Used

- `gsap.timeline()` for sequenced hero entrance
- `ScrollTrigger` for scroll-based animations
- `ScrollToPlugin` for smooth programmatic scrolling
- `canvas` API + `requestAnimationFrame` for particles
- CSS `transform-style: preserve-3d` + GSAP for card tilt
- Character scramble with `setInterval` + progressive reveal
- CSS custom properties (`--mx`, `--my`) for card spotlight glow

## 🚀 Run It

```bash
npm run dev
```

Then open the page for **17_gsap-showcase** in your browser.
