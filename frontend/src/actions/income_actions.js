import * as IncomeAPIUtil from '../util/income_util';

export const RECEIVE_ALL_INCOME = "RECEIVE_ALL_INCOME";
export const RECEIVE_INCOME = "RECEIVE_INCOME";
export const REMOVE_INCOME = "REMOVE_INCOME";

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
    }
}

export const removeIncome = incomeId => {
    return {
      type: REMOVE_INCOME,
      incomeId
    };
}

export const fetchAllIncome = () => dispatch =>
    IncomeAPIUtil.fetchAllIncome()
      .then(allIncome => dispatch(receiveAllIncome(allIncome)))
      .catch(err => console.log(err));

export const fetchMonthlyIncome = income => dispatch =>
    IncomeAPIUtil.fetchMonthlyIncome(income)
      .then(income => dispatch(receiveMonthlyIncome(income)))
      .catch(err => console.log(err));

export const postIncome = income => dispatch =>
  IncomeAPIUtil.postIncome(income)
    .then(income => dispatch(receiveMonthlyIncome(income)))
    .catch(err => console.log(err));    

export const updateIncome = incomeId => dispatch => 
  IncomeAPIUtil.updateIncome(incomeId)
    .then(() => dispatch(receiveMonthlyIncome(incomeId)))

export const deleteIncome = incomeId => dispatch =>
    IncomeAPIUtil.deleteIncome(incomeId)
      .then(() => dispatch(removeIncome(incomeId)))
      .catch(err => console.log(err));