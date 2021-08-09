var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      980: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }

      
    }
}
});