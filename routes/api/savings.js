const express = require('express');
const router = express.Router();
const savingController = require('../../controllers/savingsController');
const passport = require('passport');



router.get('/', (req, res) => {
    res.json({msg: 'this is the saving route'})
});


router.get("/annual", savingController.savingByYear);

module.exports = router;