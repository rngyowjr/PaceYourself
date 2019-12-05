import { connect } from 'react-redux';
import { updateExpense, fetchExpense } from '../../actions/expense_actions';
import UpdateExpenseForm from './update_expense_form';

const mstp = (state, ownProps) => {
    return ({
        currentUser: state.session.user,
        // expense: expense,
        expense: state.entities.expenses.data[ownProps.match.params.expenseId],
        formType: 'Update Expense'
    })
};

const mdtp = dispatch => ({
    fetchExpense: expenseId => dispatch(fetchExpense(expenseId)),
    action: expense => dispatch(updateExpense(expense))
});

export default connect(mstp, mdtp)(UpdateExpenseForm);