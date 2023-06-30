window.addEventListener('load', ()=>{
  const fixedLogo = document.querySelector("#logo > img");
  const logoTitle = document.querySelector("#logo_title");

  const mainPage = document.querySelector("#main_wrap");
  const coreValuesPage = document.querySelector("#core_values");
  const ecofuturistPage = document.querySelector("#ecofuturist");
  const ecofuturistSvgWrap = document.querySelector("#ecofuturist_svg_wrap");
  const ecofuturistArticleWrap = document.querySelector("#ecofuturist_article_wrap");
  const logoInteractionWrap = document.querySelector("#logo_interaction_wrap");
  const coreLinesPage = document.querySelector("#core_lines");
  const subLinesPage = document.querySelector("#main_wrap");

  console.log(mainPage.offsetHeight);
  // 스크롤 시 로고 색상 변경 -지현
  window.addEventListener('scroll', changeLogoColor);
  
  let scrollH = window.scrollY;
  let mainH = mainPage.offsetHeight;
  let cvH = coreValuesPage.offsetHeight;
  let efH = ecofuturistPage.offsetHeight;
  let eswH = ecofuturistSvgWrap.offsetHeight;
  let eiwH = logoInteractionWrap.offsetHeight;
  let eawH = ecofuturistArticleWrap.offsetHeight;
  let clH = coreLinesPage.offsetHeight;
  let slH = subLinesPage.offsetHeight;

  function changeLogoColor() {
    scrollH = window.scrollY;

    if((scrollH < mainH - 40) || ( scrollH > mainH + cvH + eiwH + 500 && scrollH < mainH + cvH + efH + clH - 20)) {
      logoTitle.style.color = "#42ff00"
      gsap.to(fixedLogo, {duration: 0.4, filter: "none"})
      // gsap.to(fixedLogo, {attr:{src: "/minjihaji_project/images/logo_green.png"}})
    } else {
      logoTitle.style.color = "black"
      gsap.to(fixedLogo, {duration: 0.8, filter: "grayscale(100%) brightness(0)"})
      // gsap.to(fixedLogo, {attr:{src: "/minjihaji_project/images/logo.png"}})
    }
    
  }



// 스크롤 시 페이지에 붙기 -지현
  let pageHeight = [0, mainH, mainH+cvH,  mainH+cvH+eswH, mainH+cvH+eswH+eiwH, mainH+cvH+eswH+eiwH+eawH, mainH+cvH+eswH+eiwH+eawH+clH, mainH+cvH+eswH+eiwH+eawH+clH+slH]
  let pageLength = pageHeight.length;
  let currentPageNum = 0;
  let endY; // 각 컨텐츠별 스크롤 끝나는 위치를 대입할 변수 
  let isWheel=false; // 휠 상태변수 지정 (초기값 false 지정)

  window.addEventListener('wheel', windowWheel)
  
  function windowWheel(e){        
    if(e.wheelDelta <= -120 && currentPageNum < pageLength - 1 && isWheel == false && currentPageNum != 3) {
      isWheel = true;
      currentPageNum++;
      console.log(currentPageNum);
      scrollSlide(currentPageNum)
    } else if(e.wheelDelta > -120 && currentPageNum > 0 && isWheel == false &&  currentPageNum != 3) {
      isWheel = true;                     
      currentPageNum--;            
      console.log(currentPageNum);
      scrollSlide(currentPageNum)
    } else if(currentPageNum == 3) {
      console.log(window.scrollY);
      if(window.scrollY > mainH+cvH+eswH+eiwH){
        currentPageNum = 4;
        console.log(currentPageNum);
      }
    }
  }
  
  function scrollSlide(num){
    endY = pageHeight[num];
        gsap.to("body, html", {duration: 0.5, scrollTop: endY, onComplete:()=>{
        isWheel = false
    }});
  }

})
