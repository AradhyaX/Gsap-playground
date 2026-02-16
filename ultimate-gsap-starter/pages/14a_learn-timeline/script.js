import gsap from "gsap";

const cards = document.querySelectorAll(".card");
const detailPage = document.querySelector("#detailPage");
const detailImage = document.querySelector("#detailImage");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
const closeBtn = document.querySelector("#closeBtn");

const tl = gsap.timeline({ paused: true });

tl.to(detailPage, { display: "flex", duration: 0 })
  .fromTo(detailPage, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  .fromTo(detailImage, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2")
  .fromTo(
    "#detailContent",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 },
    "-=0.2"
  )
  .fromTo(closeBtn, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.3 }, "-=0.2");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h3").textContent;
    const description = card.querySelector("p").textContent;

    detailImage.src = imgSrc;
    detailTitle.textContent = title;
    detailDescription.textContent = description;

    tl.play();
  });
});
