import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.similar__swiper', {
  navigation: {
    nextEl:'.similar__slider-button-next',
    prevEl:'.similar__slider-button-prev'
},
autoHeight:false,
watchOverflow:true,
slidesPerView:4,
slidesPerGroup:4,
spaceBetween:32,
initialSlide:0,
rows: 2,
fill: 'column',
loop:false,
looppedSlides:3,

breakpoints:{
  1025:{
    slidesPerView:4,
    slidesPerGroup:4,
  },

  769:{
    slidesPerView:3,
    slidesPerGroup:3,
  },

  700:{
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:29,
  },
  611:{
    slidesPerView:3,
    slidesPerGroup:3,
  },

  200:{
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:17,
  }
}
});
