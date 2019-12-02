import SAVING_ANNUAL from '../actions/saving_actions';


const defaultState = { 
        annual: {}, 
        // monthly: {}
    }

const savingReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SAVING_ANNUAL: 
        return Object.assign({}, state, {annual: action.payload.data})
    }
}; 

export default savingReducer;