import * as ExpenseApiUtil from '../util/expense_util';

export const RECEIVE_ALL_EXPENSES = 'RECEIVE_ALL_EXPENSES';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const receiveAllExpenses = expenses => {
    return {
        type: RECEIVE_ALL_EXPENSES,
        expenses
    };
};

const receiveExpense = expense => {
    return {
        type: RECEIVE_EXPENSE,
        expense
    };
};

const removeExpense = expenseId => {
    return {
        type: REMOVE_EXPENSE,
        expenseId
    }
};

export const fetchAllExpenses = () => dispatch => 
    ExpenseApiUtil.fetchAllExpenses()
        .then(expenses => dispatch(receiveAllExpenses(expenses)));

export const fetchExpense = expenseId => dispatch => 
    ExpenseApiUtil.fetchExpense(expenseId)
        .then(expense => dispatch(receiveExpense(expense)))
        
export const postExpense = expense => dispatch =>
    ExpenseApiUtil.postExpense(expense)
        .then(expense => dispatch(receiveExpense(expense)))

export const updateExpense = expense => dispatch => 
    ExpenseApiUtil.updateExpense(expense)
        .then(expense => dispatch(receiveExpense(expense)))

export const deleteExpense = expenseId => dispatch =>
    ExpenseApiUtil.deleteExpense(expenseId)
        .then(() => dispatch(removeExpense(expenseId)))