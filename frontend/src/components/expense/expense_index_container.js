import { connect } from 'react-redux';
import { fetchAllExpenses } from '../../actions/expense_actions';
import ExpenseIndex from './expense_index';

const mstp = state => {
    return {
        expenses: Object.values(state.entities.expenses.data),
        currentUser: state.session.user.id
    }
};

const mdtp = dispatch => {
    return {
        fetchAllExpenses: expenses => dispatch(fetchAllExpenses(expenses))
    }
};

export default connect(mstp, mdtp)(ExpenseIndex)