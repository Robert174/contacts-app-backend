const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateLoginInput(data) {
	let errors = {};
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';

	if(!Validator.isEmail(data.email)) {
		errors.email = 'Почта некорректна';
	}

	if(Validator.isEmpty(data.email)) {
		errors.email = 'Требуется почта';
	}

	if(Validator.isEmpty(data.password)) {
		errors.password = 'Требуется пароль';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
