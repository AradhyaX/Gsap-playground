import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

 const Animation = gsap.to('.box',{
  opacity:1,
  rotation:360,
  borderRadius:'50%',
  scale:1.25,
  duration:2,
})

play.addEventListener("click", function(){
  Animation.play();
});

pause.addEventListener("click", function() {
  Animation.pause();
});

reverse.addEventListener("click", function() {
  Animation.reverse();
});

restart.addEventListener("click", function() {
  Animation.restart();
});

kill.addEventListener("click", function() {
  Animation.kill();
});

yoyo.addEventListener("click", function() {
  Animation.yoyo(true);
});

resume.addEventListener("click", function() {
  Animation.resume();
});

repeat.addEventListener("click", function() {
  Animation.repeat(3);
});
 