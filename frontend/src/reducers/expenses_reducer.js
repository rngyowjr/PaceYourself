import {
  RECEIVE_ALL_EXPENSES,
  RECEIVE_EXPENSE,
  REMOVE_EXPENSE,
  SEARCH_MONTHLY,
  SEARCH_TYPE,
  SEARCH_ANNUALLY,
//   RECEIVE_ANNUAL_EXPENSE
} from "../actions/expense_actions";

let defaultState = { annual: {}, monthly: {}, type: {}, data: {}}

const expensesReducer = ( state = defaultState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_ALL_EXPENSES:
            action.expenses.data.forEach(el => nextState.data[el._id] = el )
            return nextState;
        case RECEIVE_EXPENSE:
            return Object.assign({}, state, {[action.expense.data._id]: action.expense.data})
        case REMOVE_EXPENSE:
            delete nextState[action.expenseId];
            return nextState;
        case SEARCH_ANNUALLY:
            return Object.assign({}, state, { annual: action.payload.data})
        case SEARCH_TYPE:
            return Object.assign({}, state, { type: action.payload.data})
        case SEARCH_MONTHLY:
            nextState = Object.assign({}, state, { monthly: action.payload.data })
            return nextState;
        // case RECEIVE_ANNUAL_EXPENSE:
        //     nextState = Object.assign({}, state, { annual: action.payload.data })
        //     return nextState;
        default:
            return state;
    }
};

export default expensesReducer;