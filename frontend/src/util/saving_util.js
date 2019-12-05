import axios from 'axios';

export const savingAnnually = data => {
    return axios.get('api/savings/monthly', data)
};