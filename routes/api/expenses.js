const express = require('express');
const router = express.Router();
const expenseController = require('../../controllers/expensesController');
const passport = require('passport');

router.get('/test', (req, res) => {
    res.json({ msg: 'this is the expenses route'})
});

const authCheck = passport.authenticate("jwt", { session: false });


// TESTING DELETE AFTER, BECAUSE TESTING WITHOUT LOGIN

router.post("/", expenseController.createExpense);
router.get("/", expenseController.allExpense);
router.get("/:id", expenseController.oneExpense);
router.get("/:id", expenseController.updateExpense);
router.delete("/:id", expenseController.deleteExpense);

// TESTING

// router.post("/", authCheck, expenseController.createExpense);
// router.get("/", authCheck, expenseController.allExpense);
// router.get("/:id", authCheck, expenseController.oneExpense);
// router.get("/:id", authCheck, expenseController.updateExpense);
// router.delete("/:id", authCheck, expenseController.deleteExpense);


module.exports = router;