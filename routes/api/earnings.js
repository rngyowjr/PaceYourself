const express = require('express');
const router = express.Router();
const earningController = require('../../controllers/earningsController');
const passport = require('passport');

router.get('/test', (req, res) => {
  res.json({ msg: "this is the earnings route" });
});

const authCheck = passport.authenticate("jwt", { session: false });

// TESTING ONLY WITHOUT USER LOGIN
// router.post('/', earningController.postEarning);
// router.get('/', earningController.totalEarning);
// router.get('/:id', earningController.oneEarning);
// router.get('/:id', earningController.updateEarning);
// router.delete('/:id', earningController.deleteEarning);

router.get('/testing', earningController.testing); //testing aggregate

router.get("/search", earningController.searchByInput); // need to be on top to work

router.get('/:id', earningController.oneEarning);
router.patch('/:id', earningController.updateEarning);
router.delete('/:id', earningController.deleteEarning);

// router.get('/', earningController.totalEarning);
// router.post('/', earningController.postEarning);


// to check when form are made 
    
router.post('/', authCheck, earningController.postEarning);
router.get('/', authCheck, earningController.totalEarning);
router.get('/:id', authCheck, earningController.oneEarning);
router.get('/:id', authCheck, earningController.updateEarning);
router.delete('/:id', authCheck, earningController.deleteEarning);

// router.get("/search", authCheck, earningController.searchByInput);

// router.get('/:id', authCheck, earningController.oneEarning);
// router.get('/:id', authCheck, earningController.updateEarning);
// router.delete('/:id', authCheck, earningController.deleteEarning);

// router.post('/', authCheck, earningController.postEarning);
// router.get('/', authCheck, earningController.totalEarning);

module.exports = router;