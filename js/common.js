document.addEventListener('DOMContentLoaded',()=>{
     //로딩페이지
     const loader = document.querySelector('#loader');
     const html = document.querySelector('html');
   
     html.style.overflow = 'hidden'; //로딩 중 스크롤 방지
     setTimeout(()=>{
     loader.style.opacity = '0';
     html.style.overflow = 'auto'; //스크롤 방지 해제
     setTimeout(()=>{
           loader.style.display = 'none';
       },200);
   },1000);
  
  $positionBallLi=document.querySelectorAll('#position_ball>li')
  $positionBallText=document.querySelectorAll('#position_text>li')
  $positionBar=document.querySelector('#position_bar')

  let selectedMenu=$positionBallLi[0]
  let selectedMenuTitle=$positionBallText[0]
  let checkMenu=0;
  let windowHeight = window.innerHeight;

  for(item of $positionBallLi){
    item.addEventListener('mouseenter',activatePositonBall)
    item.addEventListener('click',clickPositionBall)
  }
  $positionBar.addEventListener('mouseleave',inactivatePositionBar)
  window.addEventListener('scroll', scrollWindow);

  selectedMenu.classList.add('selected')

  function activatePositonBall(){
    checkMenu=getIndex(this)
    checkPositionTitle(checkMenu)
  }
  function clickPositionBall(){
    checkPositionBall(checkMenu)
    checkPositionTitle(checkMenu)
    scrollSlide(checkMenu)
  }

  function getIndex(index){
    let selectedIndex=0;
    while((index=index.previousElementSibling)!=null){
      selectedIndex++;
    }
    return selectedIndex;
  }
  function checkPositionBall(index){
    if (selectedMenu != $positionBallLi[index]) {
      selectedMenu.classList.remove('selected')
    }
      selectedMenu = $positionBallLi[index]
      $positionBallLi[index].classList.add('selected')
  }
  function checkPositionTitle(index){
    if (selectedMenuTitle != $positionBallText[index]) {
      selectedMenuTitle.classList.remove('selected')
    }
      selectedMenuTitle = $positionBallText[index]
      $positionBallText[index].classList.add('selected')
  }

  function inactivatePositionBar(){
    selectedMenuTitle.classList.remove('selected')
  }

  function scrollSlide(index){
    if(index!=3){
      gsap.to('body,html',{scrollTop:windowHeight*index})
    }else{
      gsap.to('body,html',{scrollTop:windowHeight*5.4})
    }
  }
  function scrollWindow(){
    let scrollHeight=window.pageYOffset;

    if(scrollHeight>=windowHeight/2 && scrollHeight<windowHeight*1.5){
      checkMenu=1;
    }else if(scrollHeight>=windowHeight*1.5 && scrollHeight<windowHeight*5){
      checkMenu=2;
    }else if(scrollHeight>=windowHeight*5){
      checkMenu=3;
    }
    else{
      checkMenu=0;
    }

    checkPositionBall(checkMenu)
  }

})

// 스크롤 시 로고 변경과 페이지 붙기
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
  
  let scrollH = window.scrollY;
  let mainH = mainPage.clientHeight;
  let cvH = coreValuesPage.clientHeight;
  let efH = ecofuturistPage.clientHeight;
  let eswH = ecofuturistSvgWrap.clientHeight;
  let eiwH = logoInteractionWrap.clientHeight;
  let eawH = ecofuturistArticleWrap.clientHeight;
  let clH = coreLinesPage.clientHeight;
  let slH = subLinesPage.clientHeight;

  let pageHeight = [0, mainH, mainH+cvH,  mainH+cvH+eswH, mainH+cvH+eswH+eiwH, mainH+cvH+eswH+eiwH+eawH, mainH+cvH+eswH+eiwH+eawH+clH]
  let pageLength = pageHeight.length;
  let currentPageNum = 0;
  let endY; // 각 컨텐츠별 스크롤 끝나는 위치를 대입할 변수 
  let isWheel=false; // 휠 상태변수 지정 (초기값 false 지정)

  window.addEventListener('scroll', changeLogoColor);
  window.addEventListener('wheel', windowWheel)
  
  function changeLogoColor() {
    scrollH = window.scrollY;

    if((scrollH < mainH - 40) || ( scrollH > mainH + cvH + eiwH + 500 && scrollH < mainH + cvH + efH + clH - 20)) {
      logoTitle.style.color = "#42ff00"
      fixedLogo.style.filter = "none"
    } else {
      logoTitle.style.color = "black"
      fixedLogo.style.filter = "grayscale(100%) brightness(0)"
    }
    
  }

  
  function windowWheel(e){        
    if(e.wheelDelta <= -120 && currentPageNum < pageLength - 1 && isWheel == false && currentPageNum != 3) {
      isWheel = true;
      currentPageNum++;
      console.log(currentPageNum);
      scrollSlide_ww(currentPageNum)
    } else if(e.wheelDelta > -120 && currentPageNum > 0 && isWheel == false) {
      isWheel = true;                     
      currentPageNum--;            
      console.log(currentPageNum);
      scrollSlide_ww(currentPageNum)
    } else if(currentPageNum == 3) {
      console.log(window.scrollY);
      isWheel = true;
      console.log(mainH+cvH+eswH);
      if(window.scrollY > mainH+cvH+eswH+500){
        currentPageNum = 4;
        console.log(currentPageNum);
        scrollSlide_ww(currentPageNum)
      }
      if(window.scrollY < mainH+cvH+eswH-600){
        currentPageNum = 2;
        console.log(currentPageNum);
        scrollSlide_ww(currentPageNum)
      }
    }
  }
  
  function scrollSlide_ww(num){
    endY = pageHeight[num];
        gsap.to("body, html", {duration: 0.5, scrollTop: endY, onComplete:()=>{
        isWheel = false
    }});
  }

})
