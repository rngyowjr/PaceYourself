const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : "";
    data.fname = validText(data.fname) ? data.fname : "";
    data.lname = validText(data.lname) ? data.lname : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if(!Validator.isLength(data.fname, { min: 2, max: 20 })) {
        errors.fname = "First name must be between 2 and 20 characters";
    }

    if(Validator.isEmpty(data.fname)) {
        errors.fname = "First name is required";
    }

    if (!Validator.isLength(data.lname, { min: 2, max: 20 })) {
        errors.lname = "Last name must be between 2 and 20 characters";
    }

    if (Validator.isEmpty(data.lname)) {
        errors.lname = "Last name is required";
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    
    if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6 and 30 characters";
    }

    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};