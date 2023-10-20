import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.anseful-articles-img-slider', {
    // Стрелки
  navigation: {
      nextEl:'.slider-button-next',
      prevEl:'.slider-button-prev'
},

// Автовысота картинки в слайде, тогда высота всего слайдера будет подстаиваться под высоту картинки, тоесть будет скакать (true нужно написать)
autoHeight:false,
// колличество слайдов для показа значение по умолчанию 1.
slidesPerView: 2,
// так-же если указать  slidesPerView:'auto', то слайдеры будут выводится автоматически но для этого нужно в css указать .image-slider .swiper-slide{
//   width: auto; }

// отступ между слайдами
spaceBetween:30,

// колличество пролистывания
slidesPerGroup:1,

// активный слайд по центру
// centeredSlides:true,

// отключение функционала если слайдов меньше чем нужно/ если к примеру слайд всего один то свайпер отключит полностью стрелки итп
watchOverflow:true,

// Стартовый слайд. отсчет слайдов идет с нуля
initialSlide:0,

// Мультирядность для корректной работы нужно отключить autoHeight:true,/autoHeight:false, также в css нужно указать:высоту слайда,пример записан под записью мультирядность. не сработает loop-true(бесконечный свайпер)

  rows: 2,
  fill: 'column',

// бесконечный свайпер/ НО
// 1)бесконечный свайпер не подразумевает скролл,
// 2)так-же не работает с мультирядностью slidesPerColumn должно быть не больше 1.
// 3)Если мы используем автоматическое кол-во слайдов для выводов, то и значение auto для slidesPerView нужно вручную добавить колличество дублирующих слайдов для этого сущ. настройка looppedSlides:3
loop:false,

// колличество дублируюших слайдов
looppedSlides:3,

breakpoints:{
  1700:{
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:32,
    },

  769:{
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:32,
    },

    400:{
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween:32,
      },

    300:{
      slidesPerView:1,
      slidesPerGroup:1,
      },


}

});
// для того что бы слайдер листался с права на лево нужно использовать rtl(right to left) направление, для этого нужно в html добавить (dir="rtl") в <div dir="rtl" class="image-slider swiper">
