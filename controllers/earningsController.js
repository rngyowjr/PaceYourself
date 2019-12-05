const Earning = require('../models/Earning');
const validateEarningInput = require('../validation/earning');
const mongoose = require("mongoose");


const totalEarning = (req, res) => {
  Earning.find({ user: mongoose.Types.ObjectId(req.user.id) }) // do we need to display all user? if not then delete inside bracket
        .sort({ date: -1})
        .then(earning => res.json(earning))
        .catch(err => res.status(404).json({noEarning: 'No earning so far'}))
};

const oneEarning = (req, res) => {
    Earning.findOne({_id: req.params.id})
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

    const updateEarn = {
      month: req.body.month,
      year: req.body.year,
      income: req.body.income
    };

    Earning.updateOne({ _id: req.params.id }, updateEarn)
      .then(() => {
        res.status(201).json({ message: 'Earning updated successfully' })
      }, (err => res.json(err)))
    };

const deleteEarning = (req, res, next) => {

  Earning.deleteOne({ _id: mongoose.Types.ObjectId(req.params.id)})
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


const searchByInput = (req, res) => {

  Earning.find(req.query)
    .sort({ date: -1 })
    .then(earning => res.json(earning))
    .catch(err => res.status(404).json({ noEarning: "No earning" }));

    
    // that is route for frontend to use to search
    // frontend route example
    // let query = { month: 'January', year: 2019 }
    // let arr = Object.entries(query)

    // if arr.length < 2 
    // let banana = '?' + arr[0].join('=')

    // let apple = '?' + arr[0].join('=') + '&'+ arr[1].join('=')
    
    // `/api/earnings/search`${apple}`
};

const totalAnnualEarning= (req, res) => {

   Earning.aggregate([
     {
       $match: {
         user: mongoose.Types.ObjectId(req.user.id),
         year: { $type: 16 }
       }
     },
     {
       $group: {
         _id: {
           month: "$month",
           income: '$income'
         }
       }
     }
   ]).then(result => {
     let sum = 0;
     result.forEach(el => (sum += el._id.income));
     res.json({ type: result, totalAmount: sum.toFixed(2) });
   });
    
}

const totalMonthlyEarning = (req, res) => {

  Earning.aggregate([
    {
      $match: {
        user: mongoose.Types.ObjectId(req.body.user),
        year: { $type: 16 },
        month: req.body.month
      }
    },
    {
      $group: {
        _id: {
          month: "$month",
          income: "$income"
        }
      }
    }
  ]).then(result => {
    let sum = 0;
    result.forEach(el => (sum += el._id.income));
    res.json({ type: result, totalAmount: sum.toFixed(2) });
  });
}


module.exports = {
  totalEarning,
  oneEarning,
  postEarning,
  updateEarning,
  deleteEarning,
  searchByInput,
  totalAnnualEarning,
  totalMonthlyEarning
};