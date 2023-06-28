document.addEventListener('DOMContentLoaded', ()=>{
  const coreValuesCards = document.querySelectorAll("#coreValues_contents_card > li");
  
  for(const item of coreValuesCards){
    gsap.to(item, {rotation: 20})
  }

  const coreValuesLine = document.querySelector("#core_values_line > span");
  const coreValuesStar = document.querySelector("#core_values_star > img");
  gsap.to(coreValuesLine, {width: 848, duration: 1, onComplete: ()=>{
    gsap.set(coreValuesStar, {display: "block"})
    gsap.set(coreValuesStar, {rotation: 360})
  }})
})