import * as IncomeAPIUtil from '../util/income_util';

export const RECEIVE_ALL_INCOME = "RECEIVE_ALL_INCOME";
export const RECEIVE_INCOME = "RECEIVE_INCOME";
export const REMOVE_INCOME = "REMOVE_INCOME"; 
export const RECEIVE_ANNUAL_INCOME = "RECEIVE_ANNUAL_INCOME";

export const receiveAllIncome = incomes => {
  return {
    type: RECEIVE_ALL_INCOME,
    incomes
  };
}

export const receiveMonthlyIncome = income => {
  return {
    type: RECEIVE_INCOME,
    income
  };
}

export const removeIncome = incomeId => {
  return {
    type: REMOVE_INCOME,
    incomeId
  };
}

export const receiveAnnualIncome = payload => {
  return {
    type: RECEIVE_ANNUAL_INCOME,
    payload
  };
}

export const fetchAllIncome = () => dispatch =>
  IncomeAPIUtil.fetchAllIncome()
    .then(allIncome => dispatch(receiveAllIncome(allIncome))) //allIncome.data to be more specific and cleaner
    .catch(err => console.log(err));

export const fetchMonthlyIncome = income => dispatch =>
  IncomeAPIUtil.fetchMonthlyIncome(income)
    .then(income => dispatch(receiveMonthlyIncome(income)))
    .catch(err => console.log(err));

export const postIncome = income => dispatch =>
  IncomeAPIUtil.postIncome(income)
    .then(income => dispatch(receiveMonthlyIncome(income)))
    .catch(err => console.log(err));    

export const updateIncome = data => dispatch => 
  IncomeAPIUtil.updateIncome(data)
    .then((data) => dispatch(receiveMonthlyIncome(data)))

export const deleteIncome = incomeId => dispatch =>
  IncomeAPIUtil.deleteIncome(incomeId)
    .then(() => dispatch(removeIncome(incomeId)))
    .catch(err => console.log(err));

export const totalAnnualIncome = year => dispatch =>
  IncomeAPIUtil.totalAnnualIncome(year)
    .then((res) => dispatch(receiveAnnualIncome(res)))
    .catch(err => console.log(err))