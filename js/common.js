document.addEventListener('DOMContentLoaded',()=>{
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

      selectedMenu = $positionBallLi[index]
      $positionBallLi[index].classList.add('selected')
    }
  }
  function checkPositionTitle(index){
    if (selectedMenuTitle != $positionBallText[index]) {
      selectedMenuTitle.classList.remove('selected')

      selectedMenuTitle = $positionBallText[index]
      $positionBallText[index].classList.add('selected')
    }
  }

  function inactivatePositionBar(){
    selectedMenuTitle.classList.remove('selected')
  }

  function scrollSlide(index){
    gsap.to('body,html',{scrollTop:windowHeight*index})
  }
  function scrollWindow(){
    let scrollHeight=window.pageYOffset;

    if(scrollHeight>=windowHeight/2 && scrollHeight<windowHeight*1.5){
      checkMenu=1;
    }else if(scrollHeight>=windowHeight*1.5){
      checkMenu=2;
    }else{
      checkMenu=0;
    }

    checkPositionBall(checkMenu)
  }

})