
searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
  searchForm.classList.toggle('active');
}

window.onscroll=()=>{
  searchForm.classList.remove('active');
}





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