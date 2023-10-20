const mainBtn = document.querySelector('.drop-down-kategories');
const activeArrows = document.querySelector('.drop-down-arrow');
if (mainBtn){
    mainBtn.addEventListener("click", function(e) {
    activeArrows.classList.toggle('drop-down-arrow--active');
    });
}



document.addEventListener('DOMContentLoaded', () =>{

    /*
     1.По клику на пункт верхнего меню открывать дропдаун
     2.По клику повторному на этот пункт  - закрывать дропдаун
     3.По клику в любое место сайта, кроме меню - закрывать дропдаун

    */

     const menuBtns = document.querySelectorAll('.drop-down-kategories');
     const drops = document.querySelectorAll('.drop-down-container');

     menuBtns.forEach(el => {
        el.addEventListener('click', (e)=>{
            let currentBtn = e.currentTarget;
            let drop =currentBtn.closest('.drop-down-kategories').querySelector('.drop-down-container');

            menuBtns.forEach(el => {
                if (el !== currentBtn) {
                    el.classList.remove('drop-down-btn--active')
                }
            });

            drops.forEach(el => {
                if (el !== drop) {
                    el.classList.remove('drop-down-container--active');
                }
            });

            drop.classList.toggle('drop-down-container--active');
            currentBtn.classList.toggle('drop-down-btn--active')
        });
     });

     document.addEventListener('click', (e) =>{
        if (!e.target.closest('.drop-down-kategories')){
            menuBtns.forEach(el => {
                el.classList.remove('drop-down-btn--active');
            });
            drops.forEach(el => {
                    el.classList.remove('drop-down-container--active');
            })
        }
     });
})


// селект

import vars from '../_vars';

if (vars.$dropDownSelect) {
  let selectCategories = '';

  vars.$dropDownSelect.addEventListener('click', (e) => {
    if (e.target.classList.contains('drop-down-link')) {;
      let searchCategories = e.target.getAttribute('data-select');
      e.currentTarget.querySelector('.drop-down-btn span').textContent = searchCategories;
      e.target.classList.toggle('drop-down-link--active');

      if (e.target.classList.contains('drop-down-link--active')) {
        let currentSelectCategories = e.target.textContent = searchCategories;
        selectCategories += currentSelectCategories + ', ';
      }
      else {
        let currentSelectCategories = e.target.textContent + ', ';

        selectCategories = selectCategories.replace(currentSelectCategories, '');
      }

      e.currentTarget.querySelector('.drop-down-btn span').textContent = searchCategories;

      if (!selectCategories) {
        e.currentTarget.querySelector('.drop-down-btn span').textContent = 'Категория';
      }
    }
  });

}
