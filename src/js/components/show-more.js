const showMoreButton = document.querySelector('.high-rating-button-more');
const productsLength = document.querySelectorAll('.high-rating-item').length;
let items = 6;

if(document.querySelector('.high-rating-section')) {
  showMoreButton.addEventListener('click', () => {
    items += 6;
    const array = Array.from(document.querySelector('.high-rating').children);
    const visItems = array.slice(0, items);
    visItems.forEach(el => el.classList.add('product-is-visible'));

    if(visItems.length === productsLength) {
      showMoreButton.style.display = 'none';
    }

})
}



// import vars from "../_vars";


// // Получаем ширину экрана
// const screenWidth = window.innerWidth;

// // Получаем элементы карточек
// const cards = document.querySelectorAll('.high-rating-item');


// import { isMobile, isTablet, isDesktop } from '../functions/check-viewport';
// if (isDesktop()) {
//   for (let i = 0; i < cards.length; i++) {
//     if (i >= 8) {
//       cards[i].style.display = 'none';

//   console.log('...');
//     }
//   }
// }
//   else if (isTablet) {
//     // Если ширина экрана от 1440px до 1919px, показываем только первые 4 карточки
//     for (let i = 0; i < cards.length; i++) {
//       if (i >= 6) {
//         cards[i].style.display = 'none';
//       }
//     }
//   }


// // if (screenWidth >= 1920) {
// //   // Если ширина экрана 1920px и более, показываем только первые 6 карточек
// //   for (let i = 0; i < cards.length; i++) {
// //     if (i >= 8) {
// //       cards[i].style.display = 'none';
// //     }
// //   }
// // } else if (screenWidth >= 1024) {
// //   // Если ширина экрана от 1440px до 1919px, показываем только первые 4 карточки
// //   for (let i = 0; i < cards.length; i++) {
// //     if (i >= 6) {
// //       cards[i].style.display = 'none';
// //     }
// //   }
// // }


// // Обрабатываем клик по кнопке
// vars.$showMoreB.addEventListener('click', function() {
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].style.display = 'block'; // показываем все карточки
//   }
//   button.style.display = 'none'; // скрываем кнопку, так как все карточки уже показаны
// });
