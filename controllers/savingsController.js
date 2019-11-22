// const Saving = require('../models/Saving');
// const db = require('../models');
const User = require('../models/User');
const Earning = require('../models/Earning');
const Expense = require('../models/Expense');
const mongoose = require("mongoose");


const joinAllTable = (req, res) => {
    console.log(req.query)
    User.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(req.query.userId)
            }
        },
        {
            $lookup: {
                from: 'earnings',
                localField: '_id',
                foreignField: 'user',
                as: 'user_earning'
            }
        },
        {
            $lookup: {
                from: 'expenses',
                localField: '_id',
                foreignField: 'user',
                as: 'user_expense'
            }
        }, 
        {
            $addFields: {
                totalExpense: { $sum: "$user_expense.amount" },
                totalIncome: { $sum: "$user_earning.income" },
            }
        }
    ]).then(result => res.json(result))
};


// const totalSavingMonthly = () => {

// };

// const totalSavingAnnual = () => {

// };

module.exports = {
    joinAllTable,
    // totalSavingAnnual,
    // totalSavingMonthly
};