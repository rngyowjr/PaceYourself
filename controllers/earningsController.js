const Earning = require('../models/Earning');
const validateEarningInput = require('../validation/earning');


const totalEarning = (req, res) => {

    Earning.find(({ user: req.user.id})) // do we need to display all user? if not then delete inside bracket
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

    const updateEarn = new Earning({
    //   user: req.user.id,
      month: req.body.month,
      year: req.body.year,
      income: req.body.income
    });

    Earning.update({_id: req.params.id}, updateEarn)
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

const testing = (req, res) => {

    Earning.createIndexes({"month": 1})
    .then(result => res.json(result))
    
}


module.exports = {
  totalEarning,
  oneEarning,
  postEarning,
  updateEarning,
  deleteEarning,
  searchByInput,
  testing
};