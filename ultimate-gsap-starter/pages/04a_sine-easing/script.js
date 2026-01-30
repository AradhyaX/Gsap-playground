import gsap from 'gsap';

const button = document.querySelector('.scroll-to-top');

let isFloating = false;

window.addEventListener('scroll', function(){
  if(this.window.scrollY>500){
    button.classList.add('show');

    if(!isFloating) {
      gsap.to(button, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.out"
      } )

      isFloating= true;
    }
  } else {
    button.classList.remove('show')
  }
})

button.addEventListener('mouseenter', function(){
  gsap.to(button, { scale: 1.1, duration: 0.2})
})

button.addEventListener('mouseleave', function(){
  gsap.to(button, { scale: 1, duration: 0.2})
})

button.addEventListener('click', function(){
  window.scrollTo(0,0);
})
