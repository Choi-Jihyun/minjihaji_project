// 지현
document.addEventListener('DOMContentLoaded', ()=>{
  const logoInteractionWrap = document.querySelector("#logo_interaction_wrap");
  const ecofuturistArticleWrap = document.querySelector("#ecofuturist_article_wrap");
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
        delay: index * 0.3
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

  // 로고 스핀
  let rotationGlobe = 100;
  let speedGlobe = 20;

  let lgAniTimer = setInterval(logoGlobeAnimate, 100);
  let lswAniTimer = setInterval(logoSpinWrapAnimate, 100);
  document.addEventListener('click', moreFaster)

  function logoGlobeAnimate() {
    rotationGlobe += speedGlobe;
    logoGlobeSpin.style.transform = `rotateY(${rotationGlobe}deg)`;
  }
  function logoSpinWrapAnimate() {
    rotationGlobe += speedGlobe;
    logoSpinWrap.style.transform = `rotateY(${rotationGlobe}deg)`;
  }
  function moreFaster() {
    speedGlobe = 100;
    setInterval(moveLogo, 10);
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


  let logo = document.querySelector("#ecofuturist_article_logo");

  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  // let xPos = Math.random() * (screenWidth - logo.offsetWidth);
  // let yPos = Math.random() * (screenHeight - logo.offsetHeight);
  let xPos = 970
  let yPos = 800

  let xSpeed = 2;
  let ySpeed = 2;

  function moveLogo() {
      xPos += xSpeed;
      yPos += ySpeed;
      
      if (xPos < 0 || xPos > screenWidth - logo.offsetWidth) {
          xSpeed *= -1;
      }
      
      if (yPos < 0 || yPos > screenHeight - logo.offsetHeight) {
          ySpeed *= -1;
      }
      logo.style.left = xPos -170 +"px";
      logo.style.top = yPos + "px";
  }

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
