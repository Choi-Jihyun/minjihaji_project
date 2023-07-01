document.addEventListener('DOMContentLoaded', ()=>{
  const titleCore2 = document.querySelector("#core");
  const titleLines = document.querySelector("#lines");
  const coreLinesLine = document.querySelector("#core_line_line > span");
  const coreLineStar = document.querySelector("#core_line_star > img");
  const coreLineCont = document.querySelector("#core_line_cont");
  
  gsap.set(coreLineStar, {display: 'none', scale:0})
  gsap.set(titleCore2, {display: 'none', opacity: 0, top: 100})
  gsap.set(titleLines, {display: 'none', opacity: 0, bottom: -100})
  gsap.set(coreLineCont, {display: 'none', opacity: 0, top: 580})
  window.addEventListener('scroll', scrollCoreValues);

  function scrollCoreValues() {
    let scrollHeight = window.scrollY;
    let mainH = mainPage.clientHeight;
    let cvH = coreValuesPage.clientHeight;
    let efH = ecofuturistPage.clientHeight;
    let eswH = ecofuturistSvgWrap.clientHeight;
    if(scrollHeight > mainH+cvH+efH){
      gsap.set(titleCore2, {display: 'block'})
      gsap.to(titleCore2, {top: 0, opacity:1, duration: 1, ease: "power1.out", onComplete:()=>{
        gsap.to(coreLinesLine, {width: 848, duration: 1, onComplete: ()=>{
          gsap.set(coreLineStar, {display: "block"})
          gsap.to(coreLineStar, {rotation: 360, scale: 1, delay: 0.3, onComplete: ()=>{
            gsap.to(coreLineCont, {top: 480, opacity:1, duration: 1, ease: "power1.out", onComplete: ()=>{
            }})
          }})
        }})
      }})
      gsap.set(titleLines, {display: 'block'})
      gsap.to(titleLines, {delay: 0.2, bottom: 0, opacity:1, duration: 1, ease: "power1.out"})
      gsap.set(coreLineCont, {display: 'block'})
      
    }
  }
})

