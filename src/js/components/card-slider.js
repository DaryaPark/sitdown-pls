import Swiper, { Thumbs } from 'swiper';
Swiper.use([Thumbs]);
const swiper = new Swiper('.card-slider', {
// колличество слайдов для показа значение по умолчанию 1.
autoHeight:false,

// колличество слайдов для показа значение по умолчанию 1.
slidesPerView:1,
// так-же если указать  slidesPerView:'auto', то слайдеры будут выводится автоматически но для этого нужно в css указать .image-slider .swiper-slide{
//   width: auto; }

// отключение функционала если слайдов меньше чем нужно/ если к примеру слайд всего один то свайпер отключит полностью стрелки итп
watchOverflow:true,

// отступ между слайдами


// колличество пролистывания
slidesPerGroup:1,

autoHeight:false,
// активный слайд по центру
centeredSlides:false,

resizeObserver:false,


// Стартовый слайд. отсчет слайдов идет с нуля
initialSlide:0,

// Мультирядность для корректной работы нужно отключить autoHeight:true,/autoHeight:false, также в css нужно указать:высоту слайда,пример записан под записью мультирядность. не сработает loop-true(бесконечный свайпер)
slidesPerColumn: 1,

// Миниатюры превью
thumbs: {
// свайпер с миниатюрами и его настройки
swiper:{
  el:'.card-slider-mini__nav',
  autoHeight:false,
  watchOverflow:true,
  slidesPerView: 'auto',
  spaceBetween:30,
  initialSlide:0,
  loop:false,
  freeMode:true,
  slidesPerGroup:1,
  direction: "horizontal",

  breakpoints:{
    1019:{
      spaceBetween:14,
    },

    757: {
      spaceBetween: 18,
      direction: "vertical",
    },

    200: {
      direction: "horizontal",
    }
  }
}
},

breakpoints:{
  200:{
    slidesPerView: 1,

  },


  //   500:{
  //     slidesPerView:2,
  //     slidesPerGroup:2,
  //     spaceBetween:32,
  //     },

  //     320:{
  //       slidesPerView:1,
  //       slidesPerGroup:1,
  //       },
}
});
