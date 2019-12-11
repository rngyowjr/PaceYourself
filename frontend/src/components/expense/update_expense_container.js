import { connect } from 'react-redux';
import { updateExpense, fetchAllExpenses } from '../../actions/expense_actions';
import UpdateExpense from './update_expense';

const mstp = (state, ownProps) => ({
    // currentUser: state.session.user,
    // income: state.entities.incomes.data[ownProps.match.params.incomeId],
    // incomes: Object.values(state.entities.incomes.data)
});

const mdtp = dispatch => ({
  update_expense: expense => dispatch(updateExpense(expense)),
  fetchAllExpenses: () => dispatch(fetchAllExpenses())
});

export default connect(mstp, mdtp)(UpdateExpense);