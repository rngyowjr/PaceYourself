const Expense = require('../models/Expense');
const validateExpenseInput = require("../validation/expense");
const mongoose = require("mongoose");


const allExpense = (req, res) => {
  Expense.find({ user: mongoose.Types.ObjectId(req.user.id) })
      .sort({ date: -1 })
      .then(expense => res.json(expense))
      .catch(err => res.status(404));
};

const oneExpense = (req, res) => {
    Expense.find({_id: req.params.id})
        .then(expense => res.json(expense))
};

const createExpense = (req, res) => {
    const { errors, isValid } = validateExpenseInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    const newExpense = new Expense({
      user: req.user.id,
      type: req.body.type,
      month: req.body.month,
      amount: req.body.amount,
      year: req.body.year
    });

    newExpense.save().then(expense => res.json(expense))
};

const updateExpense = (req, res, next) => {
    const { errors, isValid } = validateExpenseInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
 
    const updateExpense = {
      month: req.body.month,
      type: req.body.type,
      year: req.body.year,
      amount: req.body.amount,
    };


  Expense.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, updateExpense)
        .then(() => {
            res.status(201).json({ message: 'Expense updated successfully'})
        }, (err => res.json(err)))
};

const deleteExpense = (req, res, next) => {
  
    Expense.deleteOne({_id: mongoose.Types.ObjectId(req.body._id)})
        .then(() =>
            res.status(200).json({
                message: 'Expense Deleted!'
            }))
        .catch(error => {
            res.status(400).json({
                error: `Expense can't be deleted`
            })
        })
};



const totalExpenseByType = (req, res) => {
  Expense.aggregate([
    {
      $match: {
        user: mongoose.Types.ObjectId(req.user.id),
        type: req.body.type
      }
    },
    {
      $group: {
        _id: {
          month: "$month",
          year: '$year',
          amount: '$amount'
        },
      }
    }
  ]).then(result => {
    let sum = 0;
    result.forEach(el => (sum += el._id.amount));
    res.json({ type: result, totalAmount: sum.toFixed(2) });
  });
};

const totalExpenseByMonth = (req, res) => {
  Expense.aggregate([
    {
      $match: {
        // user: mongoose.Types.ObjectId(req.user.id),
        month: req.body.month
      }
    },
    {
      $group: {
        _id: {
          type: "$type",
          amount: "$amount"
        }
      }
    }
  ]).then(result => {
    let sum = 0;
    result.forEach(el => (sum += el._id.amount));
    res.json({ month: result, totalAmount: sum.toFixed(2) });
  });
};


const totalExpenseByYear = (req, res) => {
  Expense.aggregate([
    {
      $match: {
        user: mongoose.Types.ObjectId(req.user.id),
        year: { $type: 16}
      }
    },
    {
      $group: {
        _id: {
          type: "$type",
          month: '$month',
          amount: "$amount"
        },
      }
    },
  ])
  .then(result => {
      let sum = 0;
      result.forEach(el => (sum += el._id.amount));
      res.json({month: result, totalAmount: sum.toFixed(2)})
  });

};


module.exports = {
  allExpense,
  oneExpense,
  createExpense,
  updateExpense,
  deleteExpense,
  totalExpenseByType,
  totalExpenseByMonth,
  totalExpenseByYear
};

