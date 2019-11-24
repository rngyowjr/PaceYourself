import {
  RECEIVE_ALL_EXPENSES,
  RECEIVE_EXPENSE,
  REMOVE_EXPENSE,
  SEARCH_MONTHLY,
  SEARCH_TYPE,
  SEARCH_ANNUALLY,
} from "../actions/expense_actions";

let defaultState = { annual: {}, monthly: {}, type: {}}

const expensesReducer = ( state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        
        case RECEIVE_ALL_EXPENSES:
            return Object.assign({}, state, action.expenses)
        case RECEIVE_EXPENSE:
            return Object.assign({}, state, {[action.expense.id]: action.expense});
        case REMOVE_EXPENSE:
   
            let nextState = Object.assign({}, state);
            delete nextState[action.expenseId];
            return nextState;
        case SEARCH_ANNUALLY:
            return Object.assign({}, state, { annual: action.payload.data})
        case SEARCH_TYPE:
            return Object.assign({}, state, { type: action.payload.data})
        case SEARCH_MONTHLY:

            return Object.assign({}, state, { monthly: action.payload.data})
        default:
            return state;
    }
};

export default expensesReducer;