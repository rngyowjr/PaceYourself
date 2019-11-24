const express = require('express');
const router = express.Router();
const expenseController = require('../../controllers/expensesController');
const passport = require('passport');

router.get('/test', (req, res) => {
    res.json({ msg: 'this is the expenses route'})
});

const authCheck = passport.authenticate("jwt", { session: false });


router.get("/searchbytype", authCheck, expenseController.totalExpenseByType)
router.get("/searchbymonth", authCheck, expenseController.totalExpenseByMonth)
router.get("/searchbyyear", authCheck, expenseController.totalExpenseByYear)

router.get("/:id", authCheck, expenseController.oneExpense);
router.patch("/:id", authCheck, expenseController.updateExpense);
router.delete("/:id", authCheck, expenseController.deleteExpense);

router.get("/", authCheck, expenseController.allExpense);
router.post("/", authCheck, expenseController.createExpense);


module.exports = router;