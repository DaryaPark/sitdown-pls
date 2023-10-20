import Swiper, {Grid,Pagination } from 'swiper';
const swiper = new Swiper('.catalog-goods__swiper', {
  modules:[Grid,Pagination],
  allowTouchMove: false,
  grid: {
    rows: 3,
    fill:'row',
  },
  spaceBetween: 32,
  pagination: {
    el: ".catalog-goods__swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },


  breakpoints:{
    1024:{
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween:32,
    },
    769:{
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    460:{
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween:29,
    },

    200: {
      spaceBetween: 14,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },


  },

});
