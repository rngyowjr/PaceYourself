const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const ExpenseSchema = new Schema({
    user: { type: ObjectId, ref: 'users', required: true},
    month: { type: String},
    type: { type: String, required: true},
    year: { type: Number},
    amount: { type: Number, required: true},
    timestamp: { type: Date, default: Date.now},
});

const Expense = mongoose.model('expenses', ExpenseSchema);
module.exports = Expense;