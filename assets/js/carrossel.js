/********************  swiper shop **************************/

var swiper = new Swiper(".shop-slider", {
    grabCursor:true,
    loop:true,
    cnteredSlides:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

  
  

  
  /******************  swiper categories ***********************/

var swiperCategories = new Swiper(".categories__conatiner", {
    spaceBetween: 24,
    loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {

    492:{
      slidesPerView: 2,
      spaceBetween: 24
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1064: {
      slidesPerView: 4,
      spaceBetween: 24
    },
  
  },

});

/************************** swiper arrivals *******************************/

var swiperProducts = new Swiper(".new__conatiner", { 
    spaceBetween: 24,
    loop: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {  
    492:{
      slidesPerView: 2,
      spaceBetween: 24
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1064: {
      slidesPerView: 4,
      spaceBetween: 24
    },
  
  }
  
  });