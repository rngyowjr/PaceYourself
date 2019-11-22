import { connect } from 'react-redux';
import { postExpense } from '../../actions/expense_actions';
import CreateExpenseForm from './expense_form';

const mstp = state => ({
    
    currentUser: state.session.user.id
    
});

const mdtp = dispatch => ({
    postExpense: expense => dispatch(postExpense(expense))
});

export default connect(mstp, mdtp)(CreateExpenseForm);