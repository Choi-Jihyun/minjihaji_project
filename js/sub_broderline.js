document.addEventListener('DOMContentLoaded', () => {
  const $subDetailImgLeft = document.querySelectorAll('#sub_detail_line_cont_pic_left>p')
  const $subDetailImgRight = document.querySelectorAll('#sub_detail_line_cont_pic_right>p')
  const $detailLeftImg = document.querySelectorAll('#sub_detail_line_cont_pic_left>p>img')
  const $detailRightImg = document.querySelectorAll('#sub_detail_line_cont_pic_right>p>img')
  const $body=document.querySelector('body')

  const grayLayer = document.createElement('div'); 
  grayLayer.id = 'grayLayer';  
  const overLayer = document.createElement('div');
  overLayer.id = 'overLayer'; 

  let selectedImg = null;
  let clickIndex = null;

  for (item of $subDetailImgLeft) {
    item.addEventListener('mouseenter', activateImg)
    item.addEventListener('mouseleave', notactivateImg)
    item.addEventListener('click', onClickLeftImg)
  }
  for (item of $subDetailImgRight) {
    item.addEventListener('mouseenter', activateImg)
    item.addEventListener('mouseleave', notactivateImg)
    item.addEventListener('click', onClickRightImg)
  }

  grayLayer.addEventListener('click',hideImg)

  function activateImg() {
    if (selectedImg != null || selectedImg != this) {
      gsap.to(selectedImg, { scale: (1) })
    }

    selectedImg = this
    gsap.to(this, { scale: (1, 1.1), ease: 'power1.out' })
  }

  function notactivateImg() {
    gsap.to(this, { scale: (1), ease: 'power1.out' })
  }

  function onClickLeftImg() {
    clickIndex = getIndex(this)
    // alert(clickIndex)
    showLeftImg(clickIndex)
  }
  function onClickRightImg() {
    clickIndex = getIndex(this)
    // alert(clickIndex)
    showRightImg(clickIndex)
  }

  function getIndex(checkIndex) {
    let selectedIndex = 0;
    while ((checkIndex = checkIndex.previousElementSibling) != null) {
      selectedIndex++;
    }
    return selectedIndex;
  }

  function showLeftImg(index){
    $body.append(grayLayer)
    $body.append(overLayer)

    gsap.set(grayLayer, { display: 'block' });
    gsap.to(grayLayer, { opacity: 0.9, duration: 3, ease: 'power1.out' })

    if(index>3){
      index=-3
    }
    gsap.set(overLayer, { display: 'block' })
    overLayer.innerHTML = '<img src=/images/broderline_contents_0' + (index) + '.jpg>'
    gsap.to(overLayer, { scale: 1, duration: 0.3, ease: 'power1.out' })
  }
  function showRightImg(index){
    $body.append(grayLayer)
    $body.append(overLayer)

    gsap.set(grayLayer, { display: 'block' });
    gsap.to(grayLayer, { opacity: 0.9, duration: 3, ease: 'power1.out' })

    if(index>=0 && index<3){
      index=index+4
    }else{
      index=index+1
    }
    gsap.set(overLayer, { display: 'block' })
    overLayer.innerHTML = '<img src=/images/broderline_contents_0' + (index) + '.jpg>'
    gsap.to(overLayer, { scale: 1, duration: 0.3, ease: 'power1.out' })
  }

  function hideImg() {
    gsap.set(overLayer, { scale: 0, display: 'none' });
    gsap.to(grayLayer, { opacity: 0, duration: 0.3, ease: 'power1.out',onComplete:()=>{
      gsap.set(grayLayer,{display:'none'})
    }})
  }

  const backButton = document.querySelector(".prev_btn");

  backButton.addEventListener('click', back)
  function back() {
    history.back(); 
  }
})