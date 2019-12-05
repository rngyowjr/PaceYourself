import { connect } from 'react-redux';
import { postExpense, fetchAllExpenses } from '../../actions/expense_actions';
import CreateExpenseForm from './create_expense_form';

const mstp = state => {
    return {
        currentUserId: state.entities.users[state.session.user],
        formType: 'Create Expense',
        expense: {
            month: '',
            year: new Date().getFullYear(),
            type: '',
            amount: '',
        }
    }
    
};

const mdtp = dispatch => ({
    fetchAllExpenses: () => dispatch(fetchAllExpenses()),
    action: expense => dispatch(postExpense(expense))
});

export default connect(mstp, mdtp)(CreateExpenseForm);