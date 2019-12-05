const express = require('express');
const router = express.Router();
const earningController = require('../../controllers/earningsController');
const passport = require('passport');

router.get('/test', (req, res) => {
  res.json({ msg: "this is the earnings route" });
});

const authCheck = passport.authenticate("jwt", { session: false });

router.get("/annual", authCheck, earningController.totalAnnualEarning);
router.get("/search", authCheck, earningController.searchByInput);
router.get('/:id', authCheck, earningController.oneEarning);
router.patch('/:id', authCheck, earningController.updateEarning);
router.get('/', authCheck, earningController.totalEarning);
router.post('/', authCheck, earningController.postEarning);
router.delete('/:id', authCheck, earningController.deleteEarning);

module.exports = router;