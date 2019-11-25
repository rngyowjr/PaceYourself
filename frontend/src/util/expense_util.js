import axios from 'axios';

export const fetchAllExpenses = () => {
    return axios.get('/api/expenses/')
};

export const fetchExpense = expenseId => {
    return axios.get(`/api/expenses/${expenseId}`)
};

export const postExpense = expense => {
    return axios.post('/api/expenses', expense)
};

export const updateExpense = expense => {
    return axios.patch(`/api/expenses/${expense.id}`, expense)
};

export const deleteExpense = data => {
    return axios.delete(`api/expenses/`, data)
};

export const expenseByMonth = data => {
    return axios.get("/api/expenses/searchbymonth", data);
};

export const expenseByType = data => {
    return axios.get("/api/expenses/searchbytype", data);
};

export const expenseByYear = data => {
    return axios.get('/api/expenses/searchbyyear', data)
};

export const totalAnnualExpense = data => {
    return axios.get(`api/expenses/searchbyyear`, data) //url came from expenses.js to get the totalExpenseByYear
}

