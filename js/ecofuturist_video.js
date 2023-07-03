document.addEventListener('DOMContentLoaded',()=>{
    const ecofuturistTextSvg=document.querySelector('#ecofuturist_text_svg')
    const evarea = document.querySelector("#ecofuturist_video_area");
    let maskVisible=true;

    evarea.addEventListener('mouseover', videoMouseOver);
    evarea.addEventListener('mouseleave', videoMouseLeave);
    ecofuturistTextSvg.addEventListener('click', showVideo);

    function videoMouseOver(){
      gsap.to(ecofuturistTextSvg,{scale:1.03,});
    }

    function videoMouseLeave(){
      gsap.to(ecofuturistTextSvg,{scale:1,});
    }

    function showVideo(){
      if(maskVisible){
        gsap.to(ecofuturistTextSvg,{mackImage:'none',webkitMaskImage:'none',scale:1, onComplete: ()=>{
          gsap.set(evarea, {display: "none"})
        }})
    }else{
      gsap.to(ecofuturistTextSvg,{maskImage:'url("/minjihaji_project/images/ecofuturist.svg")',webkitMaskImage:'url("/minjihaji_project/images/ecofuturist.svg")',duration:1, onComplete:()=>{
        gsap.set(evarea, {display: "block"})
      }})
    }
    maskVisible=!maskVisible;
    }
  })

