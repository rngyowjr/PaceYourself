const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const ExpenseSchema = new Schema({
    user: { type: ObjectId, ref: 'users', required: true},
    date: { type: Date},
    type: { type: String, required: true},
    amount: { type: Number, required: true},
    timestamp: { type: Date, default: Date.now},

});

const Expense = mongoose.model('expenses', ExpenseSchema);
module.exports = Expense;