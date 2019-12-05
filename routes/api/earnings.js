const express = require('express');
const router = express.Router();
const earningController = require('../../controllers/earningsController');
const passport = require('passport');

router.get('/test', (req, res) => {
  res.json({ msg: "this is the earnings route" });
});

const authCheck = passport.authenticate("jwt", { session: false });

router.post("/annual", authCheck, earningController.totalAnnualEarning);
router.post("/search", authCheck, earningController.searchByInput);
router.post("/monthly", authCheck, earningController.totalMonthlyEarning);
router.get('/:id', authCheck, earningController.oneEarning);
router.patch('/:id', authCheck, earningController.updateEarning);
router.get('/', authCheck, earningController.totalEarning);
router.post('/', authCheck, earningController.postEarning);
router.delete('/:id', authCheck, earningController.deleteEarning);

module.exports = router;