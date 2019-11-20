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


// to check when form are made 
    
router.post('/', authCheck, earningController.postEarning);
router.get('/', authCheck, earningController.totalEarning);
router.get('/:id', authCheck, earningController.oneEarning);
router.get('/:id', authCheck, earningController.updateEarning);
router.delete('/:id', authCheck, earningController.deleteEarning);
    


module.exports = router;