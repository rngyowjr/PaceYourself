const Earning = require('../models/Earning');
const validateEarningInput = require('../validation/earning');


const totalEarning = (req, res) => {
    Earning.find(({ user: req.userId })) // do we need to display all user? if not then delete inside bracket
        .sort({ date: 1})
        .then(earning => res.json(earning))
        .catch(err => res.status(404).json({noEarning: 'No earning so far'}))
};

const oneEarning = (req, res) => {
    Earning.find({_id: req.params.id})
        .then(earning => res.json(earning))
};

const postEarning = (req, res) => {
    const { errors, isValid } = validateEarningInput(req.body) // is req.body correct?

    if (!isValid) {
        return res.status(400).json(errors);
    };



    const newEarning = new Earning({
        user: req.user.id,
        month: req.body.month,
        year: req.body.year,
        income: req.body.income
    });

    newEarning.save().then(earning => res.json(earning))
};

const updateEarning = (req, res, next) => {
    const { errors, isValid } = validateEarningInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    const updateEarn = new Earning({
      user: req.user.id,
      month: req.body.month,
      year: req.body.year,
      income: req.body.income
    });

    Earning.updateOne({_id: req.params.id}, updateEarn)
        .then(() => {
            res.status(201).json({message: 'Earning updated successfully'})
        });
};

const deleteEarning = (req, res, next) => {

    Earning.deleteOne({_id: req.params.id})
        .then(() => 
            res.status(200).json({
                message: 'Earning Deleted!'
        }))
        .catch(error => {
            res.status(400).json({
                error: `Earning can't be deleted`
            });
        });
};

module.exports = {
  totalEarning,
  oneEarning,
  postEarning,
  updateEarning,
  deleteEarning
};