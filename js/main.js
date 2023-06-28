document.addEventListener('DOMContentLoaded', () => {
  // 지현
  const svgPath = document.querySelector("#logo_svg_wrap > svg > path");

  //[지혜수정_0627]
  const $logoBox = document.querySelector('#logo_box')
  const $mainTitle = document.querySelector('#title')
  const $changeTitle = document.querySelector('#changeTitle')
  const $mainLogo = document.querySelector('#main_logo')
  const scrollDownText = document.querySelector("#scroll_box > p");
  const scrollBar = document.querySelector(".scroll_bar");
  let logoDuration = 1;

  activateTitle();

  // 지현
  // 애니메이션 끝나면 작동하도록 함
  gsap.set(scrollDownText, {opacity: 0})
  
  function scrollDownAni() {
    gsap.to(scrollDownText, {bottom: -10, duration: 0.4,onComplete: ()=>{
      gsap.to(scrollDownText, {bottom: 0, duration: 0.5})
    }})
  }

  function activateTitle() {//0167

    gsap.set($changeTitle, { display: 'block', top: 60 + 'px', left: -90 + 'px' })
    gsap.set(svgPath, {display: 'none'})
    gsap.to($changeTitle.children[10], { left: 1509.88 + 'px', ease: 'power1.out', duration: logoDuration, delay: 0.2 })

    gsap.to($mainTitle.children[11], { top: 76 + 'px', duration: logoDuration, delay: 1 })
    gsap.to($mainTitle.children[11], { left: 801.64 + 'px', duration: logoDuration, delay: 1.5 })
    gsap.to($mainTitle.children[11], { left: 690 + 'px', duration: logoDuration, delay: 2 })
    gsap.to($mainTitle.children[11], { left: 350 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($mainTitle.children[11], { left: 315.43 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($mainTitle.children[11], { top: 0 + 'px', left: 122.5 + 'px', duration: logoDuration, delay: 4 })

    gsap.to($mainTitle.children[10], { top: 76 + 'px', duration: logoDuration, delay: 1 })
    gsap.to($mainTitle.children[10], { left: 718.15 + 'px', duration: logoDuration, delay: 1.5 })
    gsap.to($mainTitle.children[10], { left: 620 + 'px', duration: logoDuration, delay: 2 })
    gsap.to($mainTitle.children[10], { left: 290 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($mainTitle.children[10], { left: 280 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($mainTitle.children[10], { left: 280 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($mainTitle.children[10], { top: 0 + 'px', left: 0 + 'px', duration: logoDuration, delay: 4 })
    gsap.to($mainTitle.children[10], { left: 20 + 'px', duration: logoDuration, delay: 6.5 })


    gsap.to($mainTitle.children[0], { top: -76 + 'px', duration: logoDuration, delay: 1.5 })
    gsap.to($mainTitle.children[0], { left: 233.81 + 'px', duration: logoDuration, delay: 2 })
    gsap.to($mainTitle.children[0], { left: 374.04 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($mainTitle.children[0], { left: 477.46 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($mainTitle.children[0], { left: 500 + 'px', duration: logoDuration, delay: 4.5 })
    gsap.to($mainTitle.children[0], { left: 800 + 'px', duration: logoDuration, delay: 5 })
    gsap.to($mainTitle.children[0], { left: 1500 + 'px', duration: logoDuration, delay: 5.5 })
    gsap.to($mainTitle.children[0], { left: 2000 + 'px', duration: logoDuration, delay: 5.8 })

    gsap.to($mainTitle.children[1], { top: -76 + 'px', duration: logoDuration, delay: 1.5 })
    gsap.to($mainTitle.children[1], { left: 315.43 + 'px', duration: logoDuration, delay: 2 })
    gsap.to($mainTitle.children[1], { left: 477.46 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($mainTitle.children[1], { left: 560.95 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($mainTitle.children[1], { top: 0 + 'px', left: 642.95 + 'px', duration: logoDuration, delay: 4 })

    gsap.to($mainTitle.children[6], { top: -76 + 'px', duration: logoDuration, delay: 1.5 })

    gsap.to($mainTitle.children[7], { top: -76 + 'px', duration: logoDuration, delay: 1.5 })
    gsap.to($mainTitle.children[7], { left: 740 + 'px', duration: logoDuration, delay: 2 })
    gsap.to($mainTitle.children[7], { left: 984.88 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($mainTitle.children[7], { left: 1100 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($mainTitle.children[7], { left: 1300 + 'px', duration: logoDuration, delay: 3.5 })
    gsap.to($mainTitle.children[7], { left: 1500+ 'px', duration: logoDuration, delay: 4 })
    gsap.to($mainTitle.children[7], { left: 1800 + 'px', duration: logoDuration, delay: 4.5 })
    gsap.to($mainTitle.children[7], { left: 2000 + 'px', duration: logoDuration, delay: 5 })
    // gsap.to($mainTitle.children[7], { left: 900 + 'px', duration: logoDuration, delay: 5.5 })
    // gsap.to($mainTitle.children[7], { left: 2000 + 'px', duration: logoDuration, delay: 5.8 })

    gsap.to($mainTitle.children[8], { top: -76 + 'px', duration: logoDuration, delay: 2.2 })
    gsap.to($mainTitle.children[8], { left: 893.26 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($mainTitle.children[8], { top: 0 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($mainTitle.children[8], { left: 801.64 + 'px', duration: logoDuration, delay: 6.5 })

    gsap.to($mainTitle.children[9], { top: 76 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($mainTitle.children[9], { left: 642.95 + 'px', duration: logoDuration, delay: 3.3 })
    gsap.to($mainTitle.children[9], { top: 0 + 'px', left: 560.95 + 'px', duration: logoDuration, delay: 4 })

    gsap.to($mainTitle.children[2], { top: -40 + 'px', duration: logoDuration, delay: 3.5 })
    gsap.to($mainTitle.children[2], { top: -76 + 'px', duration: logoDuration, delay: 3.8 })
    gsap.to($mainTitle.children[2], { left: 233.81 + 'px', duration: logoDuration, delay: 4 })
    gsap.to($mainTitle.children[2], { left: 374.04 + 'px', duration: logoDuration, delay: 4.5 })
    gsap.to($mainTitle.children[2], { left: 950 + 'px', duration: logoDuration, delay: 5 })
    gsap.to($mainTitle.children[2], { left: 1300 + 'px', duration: logoDuration, delay: 5.5 })
    gsap.to($mainTitle.children[2], { left: 2000 + 'px', duration: logoDuration, delay: 5.8 })

    gsap.to($mainTitle.children[3], { top: -40 + 'px', duration: logoDuration, delay: 3.5 })
    gsap.to($mainTitle.children[3], { top: -76 + 'px', duration: logoDuration, delay: 3.8 })
    gsap.to($mainTitle.children[3], { left: 315.43 + 'px', duration: logoDuration, delay: 4 })
    gsap.to($mainTitle.children[3], { left: 1000 + 'px', duration: logoDuration, delay: 4.5 })
    gsap.to($mainTitle.children[3], { left: 1500 + 'px', duration: logoDuration, delay: 5.5 })
    gsap.to($mainTitle.children[3], { left: 2000 + 'px', duration: logoDuration, delay: 5.8 })

    gsap.to($changeTitle.children[10], { top: 75 + 'px', duration: logoDuration, delay: 1 })
    gsap.to($changeTitle.children[10], { left: 1400 + 'px', duration: logoDuration, delay: 6.5 })

    gsap.to($changeTitle.children[2], { left: 120 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($changeTitle.children[2], { left: 320 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($changeTitle.children[2], { left: 450 + 'px', duration: logoDuration, delay: 4 })
    gsap.to($changeTitle.children[2], { left: 550 + 'px', duration: logoDuration, delay: 4.5 })
    gsap.to($changeTitle.children[2], { left: 740 + 'px', duration: logoDuration, delay: 5 })
    gsap.to($changeTitle.children[2], { top: 75 + 'px', duration: logoDuration, delay: 5.5 })

    gsap.to($changeTitle.children[3], { left: 184 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($changeTitle.children[3], { left: 384 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($changeTitle.children[3], { left: 514 + 'px', duration: logoDuration, delay: 4 })
    gsap.to($changeTitle.children[3], { left: 614 + 'px', duration: logoDuration, delay: 4.5 })
    gsap.to($changeTitle.children[3], { left: 830 + 'px', duration: logoDuration, delay: 5 })
    gsap.to($changeTitle.children[3], { top: 75 + 'px', duration: logoDuration, delay: 5.5 })

    gsap.to($changeTitle.children[8], { left: 243 + 'px', duration: logoDuration, delay: 2.5 })
    gsap.to($changeTitle.children[8], { left: 443 + 'px', duration: logoDuration, delay: 3 })
    gsap.to($changeTitle.children[8], { left: 573 + 'px', duration: logoDuration, delay: 4 })
    gsap.to($changeTitle.children[8], { left: 673 + 'px', duration: logoDuration, delay: 4.5 })
    gsap.to($changeTitle.children[8], { left: 917+ 'px', duration: logoDuration, delay: 5 })
    gsap.to($changeTitle.children[8], { left: 1344.64 + 'px', duration: logoDuration, delay: 5.5 })
    gsap.to($changeTitle.children[8], { top: 75 + 'px', duration: logoDuration, delay: 6 })
    gsap.to($changeTitle.children[8], { left: 1250+ 'px', duration: logoDuration, delay: 6.5, onComplete: ()=>{
      gsap.set(svgPath, {display: 'block'})
      svgPath.classList.add('animation')
      setInterval(scrollDownAni, 1600);
      gsap.to(scrollBar, {height: 70, delay: 1.5})
      gsap.to(scrollDownText, {opacity: 1, delay: 2.2})
      
    }})
  }

  
})