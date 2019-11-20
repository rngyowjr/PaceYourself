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

export const fetchMonthlyIncome = incomeId => dispatch =>
    IncomeAPIUtil.fetchMonthlyIncome(incomeId)
      .then(income => dispatch(receiveMonthlyIncome(income)))
      .catch(err => console.log(err));

export const deleteIncome = earningsId => dispatch =>
    IncomeAPIUtil.deleteIncome(earningsId)
      .then(() => dispatch(removeIncome(earningsId)))
      .catch(err => console.log(err));