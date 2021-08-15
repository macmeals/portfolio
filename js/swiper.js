var swiper = new Swiper('.swiper-container', {
    loop: true, //最後に達したら先頭に戻る
    slidesPerView: 1,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      
      699: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    },

});