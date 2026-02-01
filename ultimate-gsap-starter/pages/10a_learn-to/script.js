import gsap from 'gsap';

const showToastLoop = function(){
gsap.to('.toast',{
  y: -120,
  opacity: 1,
  scale: 1,
  duration: 0.8,
  ease: 'power4.out',
  onComplete: function(){
    gsap.to('.toast',{
      delay:2.5,
      y: 0,
      opacity: 0,
      scale: 0.95,
      duration:0.7,
      ease: 'power1.in',
      onComplete:function(){
        setTimeout(showToastLoop,3000)
      }
    })
  }
})
}

showToastLoop();