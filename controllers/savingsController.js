// const Saving = require('../models/Saving');
// const db = require('../models');
const Users = require('../models/User');
const Earning = require('../models/Earning');
const Expense = require('../models/Expense');


const joinAllTable = (req, res) => {
    Earning.find({income: 342})
    .populate('user')
    .then(result => res.json(result))
    // Users.aggregate([
    //     {
    //         $lookup: {
    //             from: 'earnings',
    //             localField: 'earning',
    //             foreignField: 'user',
    //             as: 'user_earning'
    //         }
    //     },
        // {
        //     $unwind: '$user_earning'
        // },
        // {
        //     $lookup: {
        //         from: 'expenses',
        //         localField: 'expense',
        //         foreignField: 'user',
        //         as: 'user_expense'
        //     }
        // },
        // {
        //     $unwind: '$user_expense'
        // }, 
        // {
        //     $match: {
        //         month: req.body.month,
        //         // year: { $type: 16}
        //     }
        // },
        // {
        //     $group: {
        //         _id: '$email',
        //         totalExpense: { $sum: "$user_expense.amount" },
        //         totalIncome: { $sum: "$user_earning.income" },
        //         // totalSaving: { $subtract: ["$totalIncome", '$totalExpense']}
        //     }
        // }
    // ]).then(result => res.json(result))
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