import { 
    RECEIVE_ALL_INCOME, 
    RECEIVE_INCOME, 
    REMOVE_INCOME } from '../actions/income_actions';

const IncomeReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState 

    switch(action.type) {
        case RECEIVE_ALL_INCOME:
            return action.incomes;
        case RECEIVE_INCOME:
            nextState = Object.assign({}, state, {[action.income.id]: action.income})
            return nextState;
        case REMOVE_INCOME:
            delete nextState[action.incomeId]
            return nextState;
        default:
            return state;
    }
}

export default IncomeReducer;