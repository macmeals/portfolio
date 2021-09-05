
var swiper = new Swiper('.swiper1', {
  loop: true, //最後に達したら先頭に戻る
  slidesPerView: 1,
  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'falese' ,
  }
 
});