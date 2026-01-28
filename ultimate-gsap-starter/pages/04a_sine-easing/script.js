import gsap from 'gsap';

const button = document.querySelector('.scroll-to-top');

// Handle scroll event to toggle button visibility
window.addEventListener('scroll', function(){
  if(this.window.scrollY>500){
    button.classList.add('show');

    if(!isFloating) {
      gsap.to(button, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.Out"
      } )

      isFloating= true;
    }else {
      button.classList.remove('show')
    }
  }



})