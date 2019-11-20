import axios from "axios";

export const fetchAllIncome = () => {
    return axios.get("/api/income");
};

export const fetchMonthlyIncome = income => {
    return axios.get(`/api/income/${income.id}`)
};

export const postIncome = (data) => {
    return axios.post("/api/income", data)
}

export const deleteIncome = incomeId => {
    return axios.delete(`api/income/${incomeId}`)
}