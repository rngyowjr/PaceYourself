import {
    RECEIVE_ALL_EXPENSES,
    RECEIVE_EXPENSE, 
    REMOVE_EXPENSE,
    RECEIVE_ANNUAL_EXPENSE
} from '../actions/expense_actions';

let defaultState = { annual: {} }

const expensesReducer = ( state = defaultState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_ALL_EXPENSES:
            debugger
            nextState = Object.assign({}, state, action.expenses)
            return nextState;
        case RECEIVE_EXPENSE:
            return Object.assign({}, state, {[action.expense.id]: action.expense});
        case REMOVE_EXPENSE:
            nextState = Object.assign({}, state);
            delete nextState[action.expenseId];
            return nextState;
        case RECEIVE_ANNUAL_EXPENSE:
            nextState = Object.assign({}, state, { annual: action.payload.data }) //is this correct?
            return nextState;
        default:
            return state;
    }
};

export default expensesReducer;