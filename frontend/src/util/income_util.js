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

export const updateIncome = data => {
    return axios.patch(`/api/earnings/${data.id}`, data);
};

export const deleteIncome = data => {
    return axios.delete(`api/earnings/`, data)
}

export const totalAnnualIncome = data => {
    return axios.get(`api/earnings/annual`, data)  //is this correct?
}