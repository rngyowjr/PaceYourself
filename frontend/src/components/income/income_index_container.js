import { connect } from 'react-redux';
import IncomeIndex from './income_index';
import { fetchAllIncome, 
          deleteIncome,
         } from '../../actions/income_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    incomes: Object.values(state.entities.incomes.data),
    currentUser: state.entities.users[state.session.user]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllIncome: () => dispatch(fetchAllIncome()),
    deleteIncome: (incomeId) => dispatch(deleteIncome(incomeId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeIndex);