document.addEventListener('DOMContentLoaded',()=>{
    const ecofuturistTextSvg=document.querySelector('#ecofuturist_text_svg')
    
    let maskVisible=true;

    ecofuturistTextSvg.addEventListener('mouseover', videoMouseOver);
    ecofuturistTextSvg.addEventListener('mouseleave', videoMouseLeave);
    ecofuturistTextSvg.addEventListener('click', showVideo);

    function videoMouseOver(){
      gsap.to(ecofuturistTextSvg,{scale:1,});
    }

    function videoMouseLeave(){
      gsap.to(ecofuturistTextSvg,{scale:0.9,});
    }

    function showVideo(){
      if(maskVisible){
        gsap.to(ecofuturistTextSvg,{mackImage:'none',webkitMaskImage:'none',scale:1})
    }else{
      gsap.to(ecofuturistTextSvg,{maskImage:'url("/minjihaji_project/images/ecofuturist.svg")',webkitMaskImage:'url("/minjihaji_project/images/ecofuturist.svg")',duration:1})
    }
    maskVisible=!maskVisible;
    }
  })

