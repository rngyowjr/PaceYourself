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

export const updateIncome = incomeId => {
    return axios.patch(`/api/earnings/${incomeId}`);
};

export const deleteIncome = incomeId => {
    return axios.delete(`api/earnings/${incomeId}`)
}