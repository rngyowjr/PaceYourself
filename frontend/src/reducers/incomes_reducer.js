import {
  RECEIVE_ALL_INCOME,
  RECEIVE_INCOME,
  REMOVE_INCOME,
  RECEIVE_ANNUAL_INCOME
} from "../actions/income_actions";

let defaultState = { annual: {} }

const IncomeReducer = (state = defaultState, action) => {
    Object.freeze(state)
    let nextState 
    switch(action.type) {
        case RECEIVE_ALL_INCOME:
            nextState = Object.assign({}, state, action.incomes);
            return nextState;
        case RECEIVE_INCOME:
            nextState = Object.assign({}, state, {[action.income.id]: action.income})
            return nextState;
        case REMOVE_INCOME:
            delete nextState[action.incomeId]
            return nextState;
        case RECEIVE_ANNUAL_INCOME:
            nextState = Object.assign({}, state, { annual: action.payload.data })
            return nextState;
        default:
            return state;
    }
}

export default IncomeReducer;