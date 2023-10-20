import Swiper, { Pagination,Thumbs } from 'swiper';
Swiper.use([Pagination, Thumbs]);
const modalSlider = new Swiper('.modal-slider__container', {



// колличество слайдов для показа значение по умолчанию 1.
slidesPerView:"auto",
// так-же если указать  slidesPerView:'auto', то слайдеры будут выводится автоматически но для этого нужно в css указать .image-slider .swiper-slide{
//   width: auto; }


spaceBetween: 20,

// Миниатюры превью
thumbs: {
// свайпер с миниатюрами и его настройки
swiper:{
  el:'.modal-preview',
  autoHeight:false,
  watchOverflow:true,
  slidesPerView: 'auto',
  spaceBetween:78,
  initialSlide:0,
  loop:false,
  freeMode:true,
  slidesPerGroup:1,
  direction: "horizontal",

  breakpoints:{
    1440:{
      spaceBetween:78,
    },

    700: {
      spaceBetween: 59,
    },


  },
  navigation: {
    nextEl: '.modal-slider-btn-next',
    prevEl: '.modal-slider-btn-prev',
  },
}
},

// breakpoints:{
//   200:{
//     slidesPerView: 1,

//   },


  //   500:{
  //     slidesPerView:2,
  //     slidesPerGroup:2,
  //     spaceBetween:32,
  //     },

  //     320:{
  //       slidesPerView:1,
  //       slidesPerGroup:1,
  //       },
// }
});
