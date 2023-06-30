document.addEventListener('DOMContentLoaded',()=>{
  const $coreValuesTitle=document.querySelector('#core_values_title')
  const $titleCore=document.querySelector('#title_core')
  const $titleValues=document.querySelector('#title_values')
  const $coreValuesText=document.querySelector('#core_values_text')
  const $coreValuesLine=document.querySelector('#core_values_line')
  const $coreValuesStar=document.querySelector('#core_values_star')
  const $coreValuesContentSlide=document.querySelector('#coreValues_contents_slide')
  const $coreValuesContentsCard=document.querySelectorAll('#coreValues_contents_card>li>a')

  let scrollposition=window.pageYOffset

  gsap.set($coreValuesTitle,{height:-1000 >='px',opacity:0})
  if(scrollposition>=100+'vh'){
    gsap.to($titleCore,{height:})
  }
})