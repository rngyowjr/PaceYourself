const validText = require('./valid-text');
const Validator = require('validator');

module.exports = function validateEarningInput(data) {
    let errors = {};

    data.month = validText(data.month) ? data.month : '';

    if (Validator.isEmpty(data.month)) {
      errors.text = "Month field is required";
    }

    data.year = validText(data.year) ? data.year : '';

    if (Validator.isEmpty(data.year)) {
      errors.text = "Year field is required";
    }

    data.income = validText(data.income) ? data.income : '';

    if (Validator.isEmpty(data.income)) {
      errors.text = "Income field is required";
    }



    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
};
