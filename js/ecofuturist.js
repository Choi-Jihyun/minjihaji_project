// // 지현
document.addEventListener('DOMContentLoaded', ()=>{
  const logoInteractionWrap = document.querySelector("#logo_interaction_wrap");
  const brick = document.querySelector("#brick");
  const logoGlobe =document.querySelector("#logo_globe")
  const logoGlobeSpin = document.querySelector("#logo_globe_spin");
  const logoTexts = document.querySelector(".logo_texts");
  const holeBack = document.querySelector("#hole_back");
  const holeFront = document.querySelector("#hole_front");
  const waveWrap = document.querySelector("#wave_wrap");
  const floatTexts = document.querySelectorAll(".float_text");
  const logoSpinWrap = document.querySelector("#logo_spin_wrap");
  
  floatAnimate();

  function floatAnimate() {
    floatTexts.forEach((text, index) => {
      gsap.to(text, {
        y: `+=20`,
        duration: 2,
        ease: CustomEase.create("custom", "M0,0 C0.176,-0.152 0.374,0.306 0.507,0.512 0.652,0.738 0.852,1.152 1,1 "),
        repeat: -1,
        yoyo: true,
        delay: index * 0.3 // 0.5초마다 요소들이 움직이도록 함
      })
    });
  }

  gsap.set(waveWrap, {display: "none"})

  gsap.to(brick, {
    top: 93.4+'vh',
    scrollTrigger: {
      trigger: logoInteractionWrap,
      markers: true,
      start: 'top -10%',
      end: 'bottom 120%', 
      scrub: 1,
    },
    onComplete: ()=>{
      gsap.to(holeBack, {display: 'none', duration: 0.1, onComplete: ()=> { 
        gsap.to(brick, {opacity: 0, duration: 0.1, onComplete: ()=>{
          gsap.to(holeFront, {display: 'none'})
        }})
      }}) 
      gsap.to(waveWrap, {display: "block", bottom: 46+'vh', duration: 0.7})
    }
  })

  gsap.to(logoGlobe, {
    top: 120+'vh',
    scrollTrigger: {
      trigger: logoInteractionWrap,
      // markers: true,
      start: 'top -10%',
      end: 'bottom 120%',
      scrub: 1,
    },
    onComplete: ()=>{
      gsap.to(logoGlobe, {display: 'none', duration: 0.2})
    }
  })

  let rotationGlobe = 100;
  let speedGlobe = 20;

  setInterval(animate, 100);

  function animate() {
    rotationGlobe += speedGlobe;
    logoGlobeSpin.style.transform = `rotateY(${rotationGlobe}deg)`;
  }
  
  gsap.to(logoGlobeSpin, {
    scrollTrigger: {
      trigger: logoInteractionWrap,
      // markers: true,
      start: 'top -10%',
      end: 'bottom 120%',
      scrub: 1,
    }
  })

  gsap.to(logoTexts, {
    top: 140+'vh',
    scrollTrigger: {
      trigger: logoInteractionWrap,
      // markers: true,
      start: 'top -10%',
      end: 'bottom 120%',
      scrub: 1,
    },
    onComplete: ()=>{
      gsap.to(logoTexts, {display: 'none', duration: 0.2})
    }
  })

  // 지현 -> 스크롤하면 로고 돌아가는 거
  // window.addEventListener('scroll', scrollLogoAnimate);
  // function scrollLogoAnimate() {
  //   let scrollHeight = window.scrollY + window.innerHeight;
  //   gsap.to(logoGlobeSpin, {transform: `rotateY(${scrollHeight*2}deg)`})
  // }
  



})


// 하이