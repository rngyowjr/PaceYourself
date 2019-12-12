import { connect } from 'react-redux';
import { fetchAllExpenses, updateExpense } from '../../actions/expense_actions';
import ExpenseIndex from './expense_index';

const mapStateToProps = state => {
  return {
    expenses: Object.values(state.entities.expenses.data),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllExpenses: () => dispatch(fetchAllExpenses()),

    updateExpense: expense => dispatch(updateExpense(expense)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseIndex)