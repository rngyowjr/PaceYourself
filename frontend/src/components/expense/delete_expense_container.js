import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expense_actions';
import DeleteExpense from './delete_expense';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteExpense);

