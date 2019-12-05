import axios from "axios";

export const fetchAllIncome = () => {
    return axios.get("/api/earnings");
};

export const fetchMonthlyIncome = income => {
    return axios.get(`/api/earnings/${income.id}`)
};

export const postIncome = data => {
    return axios.post("/api/earnings", data)
}

export const updateIncome = income => {
    return axios.patch(`/api/earnings/${income._id}`, income);
};

export const deleteIncome = incomeId => {
    return axios.delete(`api/earnings/${incomeId}`)
}

export const totalAnnualIncome = data => {
    return axios.post(`api/earnings/annual`, data)
}

export const totalMonthlyIncome = data => {
    return axios.post('/api/earnings/monthly', data)
};