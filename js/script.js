var swiper = new Swiper(".book-slider", {
    
    
   loop:true,
   centeredSlides:true,
   autoplay:{
     delay:500,
     disableOnInteraction:false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
      
      },
    },
  });