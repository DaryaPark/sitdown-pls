// import vars from '../_vars';

// vars.$catalogFiltersTop.forEach(el => {
//   el.addEventListener('click', (e) => {
//     e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
//   });
// });


document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".catalog-filter__top").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".catalog-filter__bottom");

    document.querySelectorAll(".catalog-filter__top").forEach(el => {
      if (el != btn) {
        el.classList.remove("catalog-filter__top--active");
      }
    });

    document.querySelectorAll(".catalog-filter__bottom").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("catalog-filter__bottom--open");
      }
    })
    dropdown.classList.toggle("catalog-filter__bottom--open");
    btn.classList.toggle("catalog-filter__top--active")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".catalog-filters")) {
    document.querySelectorAll(".catalog-filter__bottom").forEach(el => {
        el.classList.remove("catalog-filter__bottom--open");
    })
     document.querySelectorAll(".catalog-filter__top").forEach(el => {
        el.classList.remove("catalog-filter__top--active");
    });
  }
})
})
