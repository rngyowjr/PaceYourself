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
<<<<<<< HEAD
    return axios.patch(`/api/expenses/${incomeId}`)
}
=======
    return axios.patch(`/api/earnings/${incomeId}`);
};
>>>>>>> cb471da2b0b715d33e29cc227f8b38f7be7c713c

export const deleteIncome = incomeId => {
    return axios.delete(`api/earnings/${incomeId}`)
}