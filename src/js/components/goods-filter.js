  if ('.catalog-filter-color') {
    let tagColor = '';

    document.addEventListener('click', (e) => {

      if (e.target.classList.contains('catalog-custom-checkbox__input-color')) {
        let color = e.target.getAttribute('data-color');
        let colorString = document.querySelector('.catalog-choice__btn-color')
        e.currentTarget.querySelector('.catalog-choice__btn-color span').textContent = color;
        e.target.classList.toggle('input-active');

        if(e.target.classList.contains('input-active')) {
          e.currentTarget.querySelector('.catalog-choice__btn-color').classList.add('catalog-choice__btn--active');
          let currentTagColor = e.target.textContent = color;
          tagColor += currentTagColor + ' ';
        } else {
          let currentTagColor = e.target.textContent + ' ';

          tagColor = tagColor.replace(currentTagColor, '');
        }

        e.currentTarget.querySelector('.catalog-choice__btn-color span').textContent = tagColor;

        if (!tagColor) {
         colorString.classList.remove('catalog-choice__btn--active');
        }
      }
      if (e.target.classList.contains('catalog-choice__btn--active')) {
        e.target.classList.remove('.input-active');
        e.currentTarget.querySelector('.catalog-choice__btn-color').classList.remove('catalog-choice__btn--active');
      }
    })

  }

  if ('.catalog-filter-categories') {
    let tagCategories = '';

    document.addEventListener('click', (e) => {

      if (e.target.classList.contains('catalog-custom-checkbox__input-categori')) {
        let categoria = e.target.getAttribute('data-target');
        let categoriesString = document.querySelector('.catalog-choice__btn-categories')
        e.currentTarget.querySelector('.catalog-choice__btn-categories span').textContent = categoria;
        e.target.classList.toggle('input-active');

        if(e.target.classList.contains('input-active')) {
          e.currentTarget.querySelector('.catalog-choice__btn-categories').classList.add('catalog-choice__btn--active');
          let currentTagCategories = e.target.textContent = categoria;
          tagCategories += currentTagCategories + ' ';
        } else {
          let currentTagCategories = e.target.textContent + ' ';

          tagCategories = tagCategories.replace(currentTagCategories, '');
        }

        e.currentTarget.querySelector('.catalog-choice__btn-categories span').textContent = tagCategories;

        if (!tagCategories) {
         categoriesString.classList.remove('catalog-choice__btn--active');
        }
      }
      if (e.target.classList.contains('catalog-choice__btn--active')) {
        e.target.classList.remove('input-active');
        e.currentTarget.querySelector('.catalog-choice__btn-categories').classList.remove('catalog-choice__btn--active');
      }
    })

  }

  if ('.catalog-filter-price') {
    document.addEventListener('click', (e) => {
      let filterPrice = e.target.getAttribute('aria-valuetext');
      if (e.target.classList.contains('noUi-handle')) {
        e.currentTarget.querySelector('.catalog-choice__btn-price span').textContent = filterPrice;
        e.target.classList.toggle('input-active');
        if(e.target.classList.contains('input-active')) {
          e.currentTarget.querySelector('.catalog-choice__btn-price').classList.add('catalog-choice__btn--active');
      }
      }
      if (e.target.classList.contains('catalog-choice__btn--active')) {
        e.target.classList.remove('.input-active');
        e.currentTarget.querySelector('.catalog-choice__btn-price').classList.remove('catalog-choice__btn--active');
      }
    })

  }

  if ('.catalog-filter-discount') {
    document.addEventListener('click', (e) => {
      let discountPrice = e.target.getAttribute('data-value');

      if (e.target.classList.contains('catalog-custom-checkbox__input-discount')) {
            e.currentTarget.querySelector('.catalog-choice__btn-discount span').textContent = discountPrice;
            e.target.classList.toggle('input-active');
            if(e.target.classList.contains('input-active')) {
              e.currentTarget.querySelector('.catalog-choice__btn-discount').classList.add('catalog-choice__btn--active');
          }
        }

        if (e.target.classList.contains('catalog-choice__btn--active')) {
          e.target.classList.remove('.input-active');
          e.currentTarget.querySelector('.catalog-choice__btn-discount').classList.remove('catalog-choice__btn--active');
        }
    })

  }



