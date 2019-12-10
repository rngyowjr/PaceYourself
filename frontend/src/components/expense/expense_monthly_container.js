import { connect } from 'react-redux';
import { expenseByMonth, fetchAllExpenses } from '../../actions/expense_actions';

const mstp = state => {
    
    return {
        searchExpense: state.entities.expenses.monthly
    }
};

const mdtp = dispatch => {

    return {
        fetchAllExpenses: () => dispatch(fetchAllExpenses()),
        expenseByMonth: data => dispatch(expenseByMonth(data))
    }
};

export default connect(mstp, mdtp)