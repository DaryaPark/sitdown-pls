import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.special-offers-img-slider', {
  navigation: {
    nextEl:'.slider-button-next',
    prevEl:'.slider-button-prev'
},
autoHeight:false,
watchOverflow:true,
initialSlide:0,
rows: 2,
fill: 'column',
loop:false,
looppedSlides:3,
breakpoints:{
  1700:{
    slidesPerView: 'auto',
    spaceBetween:32,
    slidesPerGroup:3,

  },
  769:{
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:34,
    },


    500:{
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween:32,
      },

      320:{
        slidesPerView:1,
        slidesPerGroup:1,
        },
}
});
