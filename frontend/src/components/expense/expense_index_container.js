import { connect } from 'react-redux';
import { fetchAllExpenses } from '../../actions/expense_actions';
import ExpenseIndex from './expense_index';

const mstp = state => {
    return {
        expenses: state.entities.expenses.data
    }
};

const mdtp = dispatch => {
    return {
        fetchAllExpenses: () => dispatch(fetchAllExpenses())
    }
};

export default connect(mstp, mdtp)(ExpenseIndex)