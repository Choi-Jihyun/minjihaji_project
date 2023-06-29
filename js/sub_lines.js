document.addEventListener('DOMContentLoaded', ()=>{
  const backButton = document.querySelector(".prev_btn");

  backButton.addEventListener('click', back)
  function back() {
    history.back(); 
  }

})