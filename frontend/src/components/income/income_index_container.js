import { connect } from 'react-redux';
import IncomeIndex from './income_index';
import { fetchAllIncome, deleteIncome, updateIncome } from '../../actions/income_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    incomes: state.entities.incomes.data,
    currentUser: state.entities.users[state.session.user]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllIncome: () => dispatch(fetchAllIncome()),
    updateIncome: data => dispatch(updateIncome(data)),
    deleteIncome: incomeId => dispatch(deleteIncome(incomeId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeIndex);