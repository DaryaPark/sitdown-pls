import { validateForms } from '../functions/validate-forms';

if(document.querySelector('.fos-form')) {
  const rules1 = [
    {
      ruleSelector: '.input-name',
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
      ruleSelector: '.input-tel',
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
    {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Недопустимый формат'
      }
    ]
  },
  ];

  const afterForm = () => {


    console.log('Произошла отправка, тут можно писать любые действия');
  };

  validateForms('.fos-form', rules1, afterForm);

}


