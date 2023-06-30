window.addEventListener('load', ()=>{
  const fixedLogo = document.querySelector("#logo > img");
  const logoTitle = document.querySelector("#logo_title");

  const mainPage = document.querySelector("#main_wrap");
  const coreValuesPage = document.querySelector("#core_values");
  const ecofuturistPage = document.querySelector("#ecofuturist");
  const ecofuturistSvgWrap = document.querySelector("#ecofuturist_svg_wrap");
  const logoInteractionWrap = document.querySelector("#logo_interaction_wrap");
  const coreLinesPage = document.querySelector("#core_lines");
  const subLinesPage = document.querySelector("#main_wrap");

  console.log(mainPage.offsetHeight);
  
  window.addEventListener('scroll', changeLogoColor);
  
  function changeLogoColor() {
    let scrollH = window.scrollY;
    let mainH = mainPage.offsetHeight;
    let cvH = coreValuesPage.offsetHeight;
    let efH = ecofuturistPage.offsetHeight;
    let eswH = ecofuturistSvgWrap.offsetHeight;
    let eiwH = logoInteractionWrap.offsetHeight;
    let clH = coreLinesPage.offsetHeight;

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
})


// 스크롤 참고
// window.addEventListener('load',()=>{


//   const menu=document.querySelectorAll('#menu_list>li') // 모든메뉴 찾음 
//   const contents=document.querySelectorAll('.contents') // 모든컨텐츠 찾음 

//   let menuLength=menu.length; // 메뉴 총갯수 
//   let windowHeight=window.innerHeight; // 윈도우의 높이구함 
//   let selectedMenu; // 선택된 메뉴를 대입할 변수 
//   // 주의) 초기값 menu[0] 지정되면 안됨 - 초기설정함수 menuActivate(0) 실행시 선택되었던 메뉴순번과 활성화할 메뉴순번이 같아서 처음에 실행안됨 
//   let menuClickNum=0 // 메뉴클릭한 순번을 대입할 변수 
//   let scrollHeight=0; // 윈도우 스크롤높이를 대입할 변수 
//   let endY; // 각 컨텐츠별 스크롤 끝나는 위치를 대입할 변수 
  
//   let isWheel=false; // 휠 상태변수 지정 (초기값 false 지정)


//   init(); // 초기설정 함수실행 
//   menuActivate(0) // 첫번째 메뉴 활성화 하고 시작 
//   initEvent(); // 이벤트 함수실행 

//   function init(){ // 모든 컨텐츠의 높이를 windowHeight으로 맞춤     
//       gsap.set(contents, {height:windowHeight})
//   }

//   function initEvent(){ // 모든 메뉴에 이벤트 적용 
//       for(const item of menu){
//           item.addEventListener('click',menuClick);
//       }

//       window.addEventListener('mousewheel',windowWheel) // 윈도우 스크롤 할때 windowScroll() 함수실행 

//   }

//   function menuClick(){ // 메뉴 클릭했을때 실행할 함수      

//       menuClickNum=getIndex(this) // 클락한 메뉴 순번구함              
      
//       scrollSlide(menuClickNum) // 스크롤 하는 에니메이셔 함수실행 (매개변수활용)     
//       menuActivate(menuClickNum) // windowScroll() 함수에서 scrollHeight 값에 따라 활성화를 해주기 때문에 생략해도됨 
//   }

//   function getIndex(checkMenu){ // 순번 구하는 함수 (매개변수활용)
//       let selectIndex=0;
//       while((checkMenu=checkMenu.previousElementSibling)!=null){
//           selectIndex++
//       }
//       return selectIndex
//   }

//   function scrollSlide(num){ // 스크롤 하는 에니메이션 함수 (매개변수활용)
      
//       if(selectedMenu!=menu[num]){ // 기존에 선택되었던 메뉴와 새로선택한 메뉴가 서로 같지않을때만 실행 
//           endY=windowHeight*num; // 클릭한 메뉴순번에 따른 스크롤 도착위치를 지정    

//           // scrollTop속성을 활용하여 endY 좌표까지 'body,html' 요소 스크롤에니메이션 적용                  

//               gsap.to("body,html", {duration: 0.5, scrollTop: endY, onComplete:()=>{
//               isWheel=false
//           }});
//           // 중요) web animation API animate() 에서는 scrollTop 속성이 적용안됨       
//       }
  
//   }

//   function menuActivate(num){ // 메뉴활성화 함수 (매개변수활용)

//       if(selectedMenu!=null && selectedMenu!=menu[num]){ // 기존에 선택되었는 메뉴 비활성화       
//           selectedMenu.classList.remove('selected')
//       }

//       if(selectedMenu!=menu[num]){ // 새로선택된 메뉴 활성화      
//           selectedMenu=menu[num];                
//           selectedMenu.classList.add('selected')
//       }

//   }

//   function windowWheel(e){           

//       if(e.wheelDelta<=-120 && menuClickNum<menuLength-1 && isWheel==false){ // 마우스휠을 아래로 내릴때 
//           // 주의) menuClickNum < menuLength-1 조건을 작동하기전에 적용한다. ( 연산한 다음 조건을 지정하면 wheel 동작과 충돌 )

//           isWheel=true; // 휠작동 상태를 true 로지정 
          
//           menuClickNum++; // 메뉴 클릭번호를 하나씩 증가 

//           scrollSlide(menuClickNum) // 적용된 클릭번호를 매개변수로 활용하여 스크롤 슬라이드 적용 (매개변수활용)
//           menuActivate(menuClickNum) // 적용된 클릭번호를 매개변수로 활용하여 해당메뉴를 활성화 (매견수활용)
          
//       }else if(e.wheelDelta>-120 && menuClickNum>0 && isWheel==false){ // 마우스휠을 위로 올릴때 
//           // 주의) menuClickNum > 0 조건을 작동하기전에 적용한다. ( 연산한 다음 조건을 지정하면 wheel 동작과 충돌 )
          
//           isWheel=true; // 휠작동 상태를 true 로지정                           

//           menuClickNum-- // 메뉴 클릭번호를 하나씩 감소               

//           scrollSlide(menuClickNum) // 적용된 클릭번호를 매개변수로 활용하여 스크롤 슬라이드 적용 (매개변수활용)
//           menuActivate(menuClickNum) // 적용된 클릭번호를 매개변수로 활용하여 해당메뉴를 활성화 (매개변수활용)
//       }
//   }   

// }) 
