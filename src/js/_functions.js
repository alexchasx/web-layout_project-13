import JustValidate from 'just-validate';

export const validateEmail = (formId, fieldId) => {
  const validation = new JustValidate(formId);

  validation.addField(fieldId, [
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
};
