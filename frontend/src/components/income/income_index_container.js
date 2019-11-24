import { connect } from 'react-redux';
import IncomeIndex from './income_index';
import { fetchAllIncome } from '../../actions/income_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    incomes: state.entities.incomes.data,
    currentUser: state.entities.users[state.session.user]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllIncome: () => dispatch(fetchAllIncome())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeIndex);