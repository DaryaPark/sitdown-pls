import { validateForms } from '../functions/validate-forms';

if(document.querySelector('.modal-form__form')) {
  let subscribeWindow = ('.modal-form__form-container');
let popThankYouWindow = ('.modal-form__after-form');
if(document.querySelector('.modal-form__form')) {
  const rules2 = [
    {
      ruleSelector: '.input-name-1',
      rules: [
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Недопустимый формат'
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.input-tel-1',
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },
  ];



  const afterForm = () => {


// Form Subscribe
(".modal-form__form").submit(function() {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function() {
    // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
    subscribeWindow.fadeOut();
    popThankYouWindow.fadeIn();
    // очищаем форму
    setTimeout(function() {
      th.trigger("reset");
    }, 1000);
  });
  return false;
});


    console.log('Произошла отправка, тут можно писать любые действия');
  };

  validateForms('.modal-form__form', rules2, afterForm);
}




// onSuccess((event) => {
//   document.querySelector('.modal-form__form-container').style.display = 'none';
//   document.querySelector('.modal-form__after-form').style.display = 'flex';
//   console.log('Validation passes and form submitted', event);
// });

// const afterForm = () => {


//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.fos-form', rules1, afterForm, onSuccess);

// var nextStep = document.querySelector('.modal-form__btn');

//   nextStep.addEventListener('click', function (e) {
//     e.preventDefault();
//     // Hide first view
//     document.querySelector('.modal-form__form-container').style.display = 'none';

//     // Show thank you message element
//     document.querySelector('.modal-form__after-form').style.display = 'flex';
//   });

}
