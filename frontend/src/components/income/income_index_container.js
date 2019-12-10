import { connect } from 'react-redux';
import { fetchAllIncome } from '../../actions/income_actions';
import IncomeIndex from './income_index';

const mapStateToProps = state => {
  return {
    incomes: Object.values(state.entities.incomes.data),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllIncome: () => dispatch(fetchAllIncome()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeIndex);