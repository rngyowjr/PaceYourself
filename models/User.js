const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Earning = require('../models/Earning');

const mongooseUniqueValidator = require('mongoose-unique-validator'); // so can use unique for email

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default:Date.now
    },
    expense: {
        type: Schema.Types.ObjectId, 
        ref: 'expenses'
    }
});

UserSchema.plugin(mongooseUniqueValidator); // to initialize the validator of unique

const User = mongoose.model("users", UserSchema);
module.exports = User;