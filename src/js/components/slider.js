import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.header-swiper', {
  pagination:{
      el: '.header-swiper-pagination',
      clickable:true,
  },
  slidesPerView: 'auto',
});




// new Swiper('.header-swiper', {
// pagination:{
//   el: '.header-swiper-pagination',
// },

// slidesPerView:1,

// spaceBetween:32,

// slidesPerGroup:1,

// watchOverflow:true,

// initialSlide:0,

// slidesPerColumn: 1,

// effect:'slide',



// });

