window.addEventListener("load", ()=>{
  const coreValuesCards = document.querySelectorAll(".photo_wrap");
  // const ClickCards = document.querySelectorAll("#coreValues_contents_card>li");
  // const coreValuesCards = document.querySelectorAll("img.front");
  // const coreValuesCardsBack = document.querySelectorAll("img.back");
  // const coreValuesCardsBack = document.querySelectorAll("#coreValues_contents_card_back > span");
  const coreValuesLine = document.querySelector("#core_values_line > span");
  const coreValuesStar = document.querySelector("#core_values_star > img");
  const cardWrap = document.querySelector("#coreValues_contents_slide");
  const cardSlide = document.querySelectorAll("#coreValues_contents_card > li");
  
  const titleCore = document.querySelector("#title_core");
  const titleValue = document.querySelector("#title_values");
  const coreValuesText = document.querySelector("#core_values_text");
  const slideBtn = document.querySelector("#slide_btn");
  const prevBtn = document.querySelector("#prev_btn");
  const nextBtn = document.querySelector("#next_btn");
  const showPhoto = document.querySelectorAll(".showImage");

  // const selectedCard = null;
  // const isFalse = false;

  let cardWidth = cardWrap.offsetWidth;
  let cardLength = cardSlide.length;

  let currentIndex = 0;
  let nextIndex = null;

  window.addEventListener("resize", ()=>{
    cardWidth = cardWrap.offsetWidth;
  });

  
  gsap.set(coreValuesStar, {display: 'none', scale: 0})
  gsap.set(titleCore, {display: 'none', opacity: 0, top: 100})
  gsap.set(titleValue, {display: 'none', opacity: 0, bottom: -11})
  gsap.set(coreValuesText, {display: 'none', opacity: 0, bottom: -100})
  gsap.set(coreValuesCards, {left: 2300})
  gsap.set(showPhoto, {display: "none", scale: (0, 0), opacity: 0});
  window.addEventListener('scroll', scrollCoreValues);

  nextBtn.addEventListener("click", addCardIndex);
  prevBtn.addEventListener("click", removeCardIndex);
  for(item of coreValuesCards) {
    item.addEventListener("click", showDetail);
  }

  function showDetail(){
    for(const item of showPhoto){
      gsap.to(slideBtn, {opacity: 0, duration: 0.6})
      gsap.set(item, {display: "block"});
      gsap.to(item, {duration: 1, scale: (1, 1), opacity: 1, rotation: 0, left: 0, top: 300, ease: "power1.out", onComplete: ()=>{
        item.addEventListener("click", ()=>{
          removeshowDetail();
          slideBtn.style.opacity = 1
        })
      }})
    }
  }
  
  function removeshowDetail(){
    for(const item of showPhoto){
      gsap.set(item, {display: "none", scale: (0, 0), opacity: 0 });
    }
  }

  function addCardIndex(){
    if(nextIndex < cardLength){
      nextIndex = currentIndex + 1;
    }
    slideNextVisual(nextIndex);
  }
  
  function removeCardIndex(){
    if(nextIndex >= 0) {
      nextIndex = currentIndex - 1;
    }
    slidePrevVisual(nextIndex);
  }
  

  function getIndex(checkMenu){
    let selectedIndex = 0;
    while((checkMenu = checkMenu.previousElementSibling) != null){
        selectedIndex++;
    }
    return selectedIndex;
  }


  function slideNextVisual(index){
    if(currentIndex == cardLength - 1) {
      nextBtn.innerHTML = "<img src='/minjihaji_project/images/next_btn_none.png'>";
      nextBtn.style.cursor = 'default';
    } else {
      prevBtn.innerHTML = "<img src='/minjihaji_project/images/prev_btn.png'>";
      prevBtn.style.cursor = 'pointer';
      currentIndex = (currentIndex + 1) % coreValuesCards.length;
      gsap.to(cardSlide, {duration: 1.6, x: -1920 * currentIndex});
      currentIndex = index;
      if(currentIndex == cardLength - 1){
        nextBtn.innerHTML = "<img src='/minjihaji_project/images/next_btn_none.png'>";
        nextBtn.style.cursor = 'default';
      }
    }
  }

  function slidePrevVisual(index){
    if(currentIndex == 0) {
      prevBtn.innerHTML = "<img src='/minjihaji_project/images/prev_btn_none.png'>";
      prevBtn.style.cursor = 'default';
    } else {
      nextBtn.innerHTML = "<img src='/minjihaji_project/images/next_btn.png'>";
      nextBtn.style.cursor = 'pointer';
      currentIndex = (currentIndex + 4) % coreValuesCards.length;
      gsap.to(cardSlide, {duration: 1.6, x: -1920 * currentIndex});
      currentIndex = index;
      if(currentIndex == 0) {
        prevBtn.innerHTML = "<img src='/minjihaji_project/images/prev_btn_none.png'>";
        prevBtn.style.cursor = 'default';
      }
    }
  }



  function scrollCoreValues() {
    let scrollHeight = window.scrollY;
    
    if(scrollHeight > window.innerHeight-10){
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
              gsap.to(item, {left: 850, top: 30, duration: 0.8, ease: "none", onComplete: ()=>{
                gsap.to(slideBtn, {opacity: 1, duration: 1})
                gsap.to(item, {left: 850, top: 30, duration: 0.8, rotation: 10, onComplete: ()=>{
                  gsap.to(item, {left: 850, top: 30, duration: 0.8, rotation: 10, onComplete: ()=>{
                    item.addEventListener("mouseover", ()=>{
                      gsap.to(item, {rotationY: -30, duration: 0.4});
                      gsap.to(item, {rotationY: 0, delay: 1, duration: 0.4});
                    })
                    item.addEventListener("click",()=>{
                      gsap.to(item, {left: 850, top: 30, duration: 0.4, rotation: 10,});
                      gsap.to(item, {rotationY: -360, duration: 0.4, onComplete: ()=>{
                        showDetail();
                        gsap.to(item, {display: "none", onComplete: ()=>{
                          gsap.to(item, {display: "block", onComplete: ()=>{
                            // removeshowDetail();
                          }})
                          
                        }})
                      }});
                    })
                  }})
                }})
              }})
            }

          // for(const item of coreValuesCardsBack){

          //   // gsap.set(item, {display: 'block'})
          //     gsap.to(item, {left: 0, top: 170, duration: 2, ease: "none", onComplete: ()=>{
          //       gsap.to(item, {left: 0, top: 170, duration: 0.4, rotation: 10, onComplete: ()=>{
          //         gsap.to(item, {left: 0, top: 170, duration: 0.2, rotation: 10, onComplete: ()=>{
          //           item.addEventListener("mouseover", ()=>{
          //             gsap.to(item, {rotationY: -20, duration: 0.4});
          //             gsap.to(item, {rotationY: 0, delay: 1, duration: 0.4, onComplete: ()=>{
          //               gsap.to(item, {rotationY: -20, duration: 0.4});
          //               gsap.to(item, {rotationY: 0, delay: 1, duration: 0.4});
          //             }});
          //           })
          //           // gsap.to(item, {left: 0, top:170, duration: 0.4, rotation: 10})
          //           // gsap.to(item2, {rotationY: -180, duration: 0.4});
          //         }})
          //       }})
          //     }})
          //   }
          
          }})
        }})
      }})
    }
  }
  
  
})



