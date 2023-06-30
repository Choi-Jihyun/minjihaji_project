document.addEventListener('DOMContentLoaded', ()=>{
  const coreValuesCards = document.querySelectorAll("#coreValues_contents_card > li");
  const coreValuesLine = document.querySelector("#core_values_line > span");
  const coreValuesStar = document.querySelector("#core_values_star > img");

  const titleCore = document.querySelector("#title_core");
  const titleValue = document.querySelector("#title_values");
  const coreValuesText = document.querySelector("#core_values_text");
  
  gsap.set(coreValuesStar, {display: 'none', scale: 0})
  gsap.set(titleCore, {display: 'none', opacity: 0, top: 100})
  gsap.set(titleValue, {display: 'none', opacity: 0, bottom: -11})
  gsap.set(coreValuesText, {display: 'none', opacity: 0, bottom: -100})
  gsap.set(coreValuesCards, {left: 1200, display: 'none'})
  window.addEventListener('scroll', scrollCoreValues);

  function scrollCoreValues() {
    let scrollHeight = window.scrollY;

    
    if(scrollHeight > window.innerHeight){
      gsap.set(titleCore, {display: 'block'})
      gsap.to(titleCore, {top: 0, opacity:1, duration: 1, ease: "power1.out"})
      gsap.set(titleValue, {display: 'block'})
      gsap.to(titleValue, {delay: 0.2, bottom: 89, opacity:1, duration: 1, ease: "power1.out"})
      gsap.set(coreValuesText, {display: 'block'})
      gsap.to(coreValuesText, {delay: 0.3, bottom: 0, opacity:1, duration: 1, ease: "power1.out", onComplete: ()=>{
        
      gsap.to(coreValuesLine, {width: 848, duration: 1, onComplete: ()=>{
        gsap.set(coreValuesStar, {display: "block"})
        gsap.to(coreValuesStar, {rotation: 360, scale: 1, delay: 0.3, onComplete: ()=>{
          for(const item of coreValuesCards){
            gsap.set(item, {display: 'block'})
              gsap.to(item, {left: 0, duration: 2, ease: "none", onComplete: ()=>{
                gsap.to(item, {left: 0, duration: 0.4, rotation: 10, onComplete: ()=>{
                  gsap.to(item, {left: 0, duration: 0.2, rotation: 0, onComplete: ()=>{
                    gsap.to(item, {left: 0, duration: 0.4, rotation: 10})
                  }})
                }})
              }})
            }
          }})
        }})
      }})
    }
  }
})



