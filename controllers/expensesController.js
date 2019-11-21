const Expense = require('../models/Expense');
const validateExpenseInput = require("../validation/expense");


const allExpense = (req, res) => {
    Expense.find({ user: req.user.id })
      .sort({ date: 1 })
      .then(expense => res.json(expense))
      .catch(err => res.status(404));
};

const oneExpense = (req, res) => {
    Expense.find({_id: req.params.id})
        .then(expense => res.json(expense))
};

const createExpense = (req, res) => {
    const { errors, isValid } = validateExpenseInput(req.body);

    if (isValid) {
        return res.status(400).json(errors);
    };

    const newExpense = new Expense({
      user: req.user.id,
      type: req.body.type,
      amount: req.body.amount,
      date: req.body.date
    });

    newExpense.save().then(expense => res.json(expense))
};

const updateExpense = (req, res, next) => {
    const { errors, isValid } = validateExpenseInput(req.body);

    if (isValid) {
      return res.status(400).json(errors);
    }

    const updateExpense = new Expense({
      earningId: req.earning.id,
      type: req.body.type,
      amount: req.body.amount,
      date: req.body.date
    });

    Expense.updateOne({_id: req.params.id }, updateExpense)
        .then(() => {
            res.status(201).json({ message: 'Expense updated successfully'})
        })
};

const deleteExpense = (req, res, next) => {

    Expense.deleteOne({_id: req.params.id})
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


module.exports = {
  allExpense,
  oneExpense,
  createExpense,
  updateExpense,
  deleteExpense
};

