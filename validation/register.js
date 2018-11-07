const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

  if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
      errors.name = 'Имя должно иметь от 2 до 30 символов';
  }

  if(Validator.isEmpty(data.name)) {
      errors.name = 'Требуется имя';
  }

  if(!Validator.isEmail(data.email)) {
      errors.email = 'Почта некорректна';
  }

  if(Validator.isEmpty(data.email)) {
      errors.email = 'Требуется почта';
  }

  if(!Validator.isLength(data.password, {min: 6, max: 30})) {
      errors.password = 'Пароль должен содержать от 6 до 30 символов';
  }

  if(Validator.isEmpty(data.password)) {
      errors.password = 'Требуется пароль';
  }

  if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
      errors.password_confirm = 'Пароль должен содержать от 6 до 30 символов';
  }

  if(!Validator.equals(data.password, data.password_confirm)) {
      errors.password_confirm = 'Пароли не совпадают';
  }

  if(Validator.isEmpty(data.password_confirm)) {
      errors.password_confirm = 'Требуется пароль';
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
}