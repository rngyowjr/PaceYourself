import axios from 'axios';

export const fetchAllExpenses = () => {
    return axios.get('/api/expenses')
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

export const deleteExpense = expenseId => {
    return axios.delete(`api/expenses/${expenseId}`)
};

// export const expenseByMonth = 