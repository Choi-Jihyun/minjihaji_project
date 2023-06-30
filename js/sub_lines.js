document.addEventListener('DOMContentLoaded',()=>{
  const $subDetailImgLeft=document.querySelectorAll('#sub_detail_line_cont_pic_left>p>img')
  const $subDetailImgRight=document.querySelectorAll('#sub_detail_line_cont_pic_right>p>img')

  let selectedImg=null;

  for(item of $subDetailImgLeft){
    item.addEventListener('mouseenter',activateImg)
    item.addEventListener('mouseleave',notactivateImg)
  }
  for(item of $subDetailImgRight){
    item.addEventListener('mouseenter',activateImg)
    item.addEventListener('mouseleave',notactivateImg)
  }

  function activateImg(){
    if(selectedImg != null || selectedImg != this){
      gsap.to(selectedImg,{scale:(1)})
    }

    if(selectedImg !=this){
      selectedImg=this
      gsap.to(this,{scale:(1,1.1),ease:'power1.out'})
    }

  }

  function notactivateImg(){
    gsap.to(this,{scale:(1),ease:'power1.out'})
  }


})