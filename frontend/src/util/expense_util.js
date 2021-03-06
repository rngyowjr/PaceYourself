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
    return axios.patch(`api/expenses/${expense._id}`, expense)
};

export const deleteExpense = expenseId => {
    return axios.delete(`api/expenses/${expenseId}`)
};

export const expenseByMonth = data => {
    return axios.post("/api/expenses/searchbymonth", data);
};

export const expenseByType = data => {
    return axios.post("/api/expenses/searchbytype", data);
};

export const expenseByYear = data => {
    return axios.get('/api/expenses/searchbyyear', data)
};

export const totalAnnualExpense = data => {
    return axios.get(`api/expenses/searchbyyear`, data)
}

