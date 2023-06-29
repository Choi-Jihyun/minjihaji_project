document.addEventListener("DOMContentLoaded",()=>{
    const card = document.querySelector("#coreValues_contents_card>span, #coreValues_contents_card_back>span");
    card.addEventListener("mouseenter", cardClick);

    function cardClick(event){
    const flip = event.currentTarget;
    flip.style.transform = "rotateY(180deg)";
    }

    // const valueSection = gsap.utils.toArray("#coreValues_contents_slide");

    // const horiz = gsap.to(valueSection, {
    //     xPercent: -100 * (valueSection.length - 1),
    //     ease: "none",
    //     scrollTrigger:{
    //         trigger: "#coreValues_contents_slide",
    //         start: "top 10%",
    //         end: "+=6000",
    //         pin: true,
    //         scrub: 1,
    //         markers: false
    //     },
    // });
})

// $(document).ready(function(){
//     const d_width = 0;
//     const d_height = 0;

//     function tmp(){
//         const div_width = $(window).outerWidth() * $('#coreValues_contents_card').length;


//         $("#coreValues_contents_slide").css({
//             width: div_width,
//             height: '100vh',
//             position: 'fixed',
//             top: 0,
//             left: 0
//         });

//         $('#coreValues_contents_card').css({
//             width: div_width / $('#coreValues_contents_card').length,
//             height: "100vh",
//             float: "left"
//         });

//         $('#core_value_wrap').css({
//             height: "100vh"
//         });

//         const w_width = $(window).width();
//         const w_heigth = $(window).heigth();

//         d_width = div_width - w_width;
//         d_height = $("#core_value_wrap").height() - w_heigth;


//     }

//     tmp();

//     const array = [];
//     for(const i = 0; i < $("#coreValues_contents_card").length; i++){
//         array[i] = $("#coreValues_contents_card").eq(i).offset().left;
//     }

//     const check = true;
//     $("#coreValues_contents_card").on("mousewheel DOMMouseScroll", function(){
//         if(check){
//             check = false;
//             setTimeout(function(){
//                 check = true;
//             }, 500)
//         }

//         let w_delta = event.wheelDelta / 120;

//         if(w_delta < 0 && $(this).next().length > 0){
//             $("#coreValues_contents_slide").animate({
//                 left: -array[$(this).index() + 1]
//             }, 500)
//         }else if(w_delta > 0 && $(this).prev().length > 0){
//             $("#coreValues_contents_slide").animate({
//                 left: -array[$(this).index() + 1]
//             }, 500)
//         }
//     });

//     $(window).resize(function(){
//         for(const i = 0; i < $("#coreValues_contents_card").length; i++){
//             array[i] = $("#coreValues_contents_card").eq(i).offset().left;
//         }
//         tmp();
//     })

// });