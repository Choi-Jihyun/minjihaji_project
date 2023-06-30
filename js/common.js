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