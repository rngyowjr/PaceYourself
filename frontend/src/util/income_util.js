import axios from "axios";

export const fetchAllIncome = () => {
    return axios.get("/api/income");
};

export const fetchMonthlyIncome = incomeId => {
    return axios.get(`/api/income/${incomeId}`)
};

export const postIncome = (data) => {
    return axios.post("/api/income", data)
}

export const deleteIncome = incomeId => {
    return axios.delete(`api/income/${incomeId}`)
}