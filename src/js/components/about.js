import JustValidate from 'just-validate';

const validation = new JustValidate('#about_form');

validation.addField('#about-email', [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели e-mail',
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат',
    tooltip: {
      position: 'left',
    },
  },
]);
