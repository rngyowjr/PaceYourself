import * as ExpenseApiUtil from '../util/expense_util';

export const RECEIVE_ALL_EXPENSES = 'RECEIVE_ALL_EXPENSES';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const SEARCH_MONTHLY = 'SEARCH_MONTHLY';
export const SEARCH_ANNUALLY = "SEARCH_ANNUALLY";
export const SEARCH_TYPE = "SEARCH_TYPE";

export const RECEIVE_ANNUAL_EXPENSE = 'RECEIVE_ANNUAL_EXPENSE';


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

const annually = (payload) => {
    return {
        type: SEARCH_ANNUALLY,
        payload
    }
}
const monthly = (payload) => {
    return {
        type: SEARCH_MONTHLY,
        payload
    }
}
const type= (payload) => {
    return {
        type: SEARCH_TYPE,
        payload
    }
}
const receiveAnnualExpense = payload => {
    return {
        type: RECEIVE_ANNUAL_EXPENSE,
        payload
    }
}

export const fetchAllExpenses = () => dispatch => 
    ExpenseApiUtil.fetchAllExpenses()
        .then(expenses => dispatch(receiveAllExpenses(expenses)))

export const fetchExpense = expenseId => dispatch => 
    ExpenseApiUtil.fetchExpense(expenseId)
        .then(expense => dispatch(receiveExpense(expense)))
        
export const postExpense = expense1 => dispatch =>
    ExpenseApiUtil.postExpense(expense1)
        .then(expense => dispatch(receiveExpense(expense)))

export const updateExpense = expense => dispatch => 
    ExpenseApiUtil.updateExpense(expense)
        .then(expense => dispatch(receiveExpense(expense)))

export const deleteExpense = expenseId => dispatch =>
    ExpenseApiUtil.deleteExpense(expenseId)
        .then(() => dispatch(removeExpense(expenseId)))

export const expenseByYear = data => dispatch => 
    ExpenseApiUtil.expenseByYear(data)
        .then(expenseData => dispatch(annually(expenseData)))

export const expenseByMonth = data => dispatch => 
    ExpenseApiUtil.expenseByMonth(data)
        .then(expenseData => dispatch(monthly(expenseData)))

export const expenseByType = data => dispatch => 
    ExpenseApiUtil.expenseByType(data)
        .then(expenseData => dispatch(type(expenseData)))

export const totalAnnualExpense = year => dispatch =>
    ExpenseApiUtil.totalAnnualExpense(year)
        .then((res) => dispatch(receiveAnnualExpense(res)))
