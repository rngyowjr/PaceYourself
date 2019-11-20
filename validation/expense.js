const validText = require("./valid-text");
const Validator = require("validator");


module.exports = function validateExpenseInput(data) {
    let errors = {};

    data.type = validText(data.type) ? data.type : "";

    if (Validator.isEmpty(data.type)) {
      errors.text = "Type of expense field is required";
    }

    data.month = validText(data.month) ? data.month : "";

    if (Validator.isEmpty(data.month)) {
      errors.text = "Month of expense field is required";
    }

    data.income = validText(data.amount) ? data.amount : "";

    if (Validator.isEmpty(data.amount)) {
      errors.text = "Amount of expense field is required";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
}